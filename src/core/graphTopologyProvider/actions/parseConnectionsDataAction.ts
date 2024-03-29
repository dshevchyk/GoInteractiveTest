import {GraphTopologyActionTypes} from "../GraphTopologyActionTypes";
import {Link} from "../GraphTopologyContext";

export type ParseConnectionsDataAction = (data: string) => void;


interface GraphDataItem {
    edges: string[];
    in_degree: number;
}

interface Graph {
    [key: string]: GraphDataItem;
}


interface VisitedData {
    [key: string]: boolean;
}

export  function parseConnectionsDataAction(dispatch: any) {
    return async (data: string) => {

        const connections: string[] = data.split(/\r?\n/);
        let topology: string[] = [];
        let links: Array<Link> = [];
        const graph: Graph = {};
        const secretHash = "%^&";
        const visited: VisitedData = {};
        connections.forEach((connection: string) => {
            if (connection.length !== 0) {
                const splitted: string[] = connection.split(" calls ");
                if (splitted.length === 2) {
                    const edge1Id = splitted[0].trim();
                    const edge2Id = splitted[1].trim();
                    const visitedKey = edge1Id + secretHash + edge2Id;
                    if (!visited[visitedKey]) {
                        if (!graph[edge1Id]) {
                            graph[edge1Id] = {
                                edges: [edge2Id],
                                in_degree: 0
                            }
                        } else {
                            graph[edge1Id].edges.push(edge2Id);
                        }
                        if (!graph[edge2Id]) {
                            graph[edge2Id] = {
                                edges: [],
                                in_degree: 1
                            }
                        } else {
                            graph[edge2Id].in_degree += 1;
                        }
                        visited[visitedKey] = true;
                        links.push({
                            source: edge1Id,
                            target: edge2Id
                        })
                    }
                } else {
                    console.warn("wrong data format: " + connection);
                }
            }
        });
        const V = Object.keys(graph);
        const q: string[] = [];
        V.forEach((v: string) => {
            if (graph[v].in_degree === 0) {
                q.push(v);
            }
        });
        let count = 0;
        while (q.length !== 0)
        {
            const u: string = q[0];
            q.shift();
            topology.push(u);

            const edges = graph[u].edges;
            edges.forEach((v: string) => {
                if (--graph[v].in_degree === 0) {
                    q.push(v);
                }
            });

            count++;
        }

        // Check if there was a cycle
        if (count !== V.length) {
            console.warn("There exists a cycle in the graph");
            topology = [];
            links = [];
        }

        dispatch({
            type: GraphTopologyActionTypes.PARSE_CONNECTIONS_DATA,
            payload: {
                topology,
                links
            },
        });
    }
}

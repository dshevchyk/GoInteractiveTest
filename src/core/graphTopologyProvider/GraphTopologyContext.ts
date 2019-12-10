import React from 'react'
import {ParseConnectionsDataAction} from "./actions/parseConnectionsDataAction";

export interface Link {
    source: string;
    target: string;
}

export interface GraphTopologyState {
    topology: Array<string>;
    links: Array<Link>;
}

export interface GraphTopologyActions {
    parseConnectionsData: ParseConnectionsDataAction;
}

export const GraphTopologyStateContext = React.createContext<GraphTopologyState>({
    topology: [],
    links: []
});

export const GraphTopologyActionsContext = React.createContext<GraphTopologyActions>({
    parseConnectionsData: (data: string) => {}
});

export function useGraphTopologyState(): GraphTopologyState {
    return React.useContext(GraphTopologyStateContext)
}

export function useGraphTopologyActions(): GraphTopologyActions {
    return React.useContext(GraphTopologyActionsContext)
}

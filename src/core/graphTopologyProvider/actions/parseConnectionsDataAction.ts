import {GraphTopologyActionTypes} from "../GraphTopologyActionTypes";

export type ParseConnectionsDataAction = (data: string) => void;

export  function parseConnectionsDataAction(dispatch: any) {
    return async (data: string) => {
        dispatch({
            type: GraphTopologyActionTypes.PARSE_CONNECTIONS_DATA,
            payload: [],
        });
    }
}

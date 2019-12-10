import {GraphTopologyActionTypes} from "../GraphTopologyActionTypes";

export type AddConnectionAction = (edgeId1: string, edgeId2: string) => void;

export  function addConnectionAction(dispatch: any) {
    return async (edgeId1: string, edgeId2: string) => {
        dispatch({
            type: GraphTopologyActionTypes.ADD_CONNECTION,
            payload: [],
        });
    }
}

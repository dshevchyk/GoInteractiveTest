import {GraphTopologyState} from "./GraphTopologyContext";
import {GraphTopologyActionTypes} from "./GraphTopologyActionTypes";

export function graphTopologyReducer(state: GraphTopologyState, action: {type: string, payload: any}): GraphTopologyState {
    switch (action.type) {
        case GraphTopologyActionTypes.PARSE_CONNECTIONS_DATA:
            return {
                ...state,
                topology: action.payload
            };
        default: {
            return state;
        }
    }
}

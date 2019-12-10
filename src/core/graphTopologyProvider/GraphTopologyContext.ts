import React from 'react'
import {AddConnectionAction} from "./actions/addConnection";

export interface GraphTopologyState {
    topology: Array<string>;
}

export interface GraphTopologyActions {
    addConnection: AddConnectionAction;
}

export const GraphTopologyStateContext = React.createContext<GraphTopologyState>({
    topology: []
});

export const GraphTopologyActionsContext = React.createContext<GraphTopologyActions>({
    addConnection: (edgeId1: string, edgeId2: string) => {}
});

export function useGraphTopologyState(): GraphTopologyState {
    return React.useContext(GraphTopologyStateContext)
}

export function useGraphTopologyActions(): GraphTopologyActions {
    return React.useContext(GraphTopologyActionsContext)
}

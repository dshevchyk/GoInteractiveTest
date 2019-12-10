import React from 'react'
import {ParseConnectionsDataAction} from "./actions/parseConnectionsDataAction";

export interface GraphTopologyState {
    topology: Array<string>;
}

export interface GraphTopologyActions {
    parseConnectionsData: ParseConnectionsDataAction;
}

export const GraphTopologyStateContext = React.createContext<GraphTopologyState>({
    topology: []
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

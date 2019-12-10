import React from 'react';
import {graphTopologyReducer} from "./graphTopologyReducer";
import {parseConnectionsDataAction} from "./actions/parseConnectionsDataAction";
import {GraphTopologyActions, GraphTopologyActionsContext, GraphTopologyStateContext} from './GraphTopologyContext';

export const GraphTopologyProvider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(graphTopologyReducer, { topology: [], links: [] })

    const actions: GraphTopologyActions = React.useMemo(() => ({
        parseConnectionsData: parseConnectionsDataAction(dispatch),
    }), []);
    return (
        <GraphTopologyStateContext.Provider value={state}>
            <GraphTopologyActionsContext.Provider value={actions}>
                {children}
            </GraphTopologyActionsContext.Provider>
        </GraphTopologyStateContext.Provider>
    )
}

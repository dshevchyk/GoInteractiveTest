import React from 'react';
import {graphTopologyReducer} from "./graphTopologyReducer";
import {addConnectionAction} from "./actions/addConnection";
import {GraphTopologyActions, GraphTopologyActionsContext, GraphTopologyStateContext} from './GraphTopologyContext';

export const GraphTopologyProvider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(graphTopologyReducer, { topology: [] })

    const actions: GraphTopologyActions = React.useMemo(() => ({
        addConnection: addConnectionAction(dispatch),
    }), []);
    return (
        <GraphTopologyStateContext.Provider value={state}>
            <GraphTopologyActionsContext.Provider value={actions}>
                {children}
            </GraphTopologyActionsContext.Provider>
        </GraphTopologyStateContext.Provider>
    )
}

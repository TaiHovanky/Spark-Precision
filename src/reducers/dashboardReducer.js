const dashboardReducer = (state={}, action) => {
    switch(action.type) {
        case 'TESTING': 
            console.log('testing reducer')
            return {
                ...state,
                field: action.field
            }
        case 'VALUES':
            console.log('values received!', action);
            return Object.assign(
                {},
                state.variables,
                {
                    ...state,
                    [action.name]: {
                        values: action.values
                    }
                }
            );
        case 'VARIABLES':
            console.log('variables received', action);
            return Object.assign(
                {},
                state,
                {
                    ...state,
                    variables: action.variables
                }
            );
        default:
            return state;
    }
}

export default dashboardReducer;
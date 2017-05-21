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
                state,
                {
                    ...state,
                    [action.name]: {
                        name: action.name,
                        unit: action.unit,
                        last_active: action.last_activity,
                        last_value: action.last_value,
                        id: action.id,
                        values: action.values
                    }
                }
            )
        default:
            return state;
    }
}

export default dashboardReducer;
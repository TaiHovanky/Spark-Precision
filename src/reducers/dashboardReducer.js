const dashboardReducer = (state={}, action) => {
    switch(action.type) {
        case 'TESTING': 
            console.log('testing reducer')
            return {
                ...state,
                field: action.field
            }
        default:
            return state;
    }
}

export default dashboardReducer;
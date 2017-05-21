import axios from 'axios';

export const testing = () => {
    return {
        type: 'TESTING',
        field: [1,2,3]
    }
}

export const getVariablesSuccess = (variables) => {
    let action = {
        type: 'VARIABLES',
        variables: {}
    }
    variables.forEach((variable) => {
        action.variables[variable.name] = {
            name: variable.name,
            unit: variable.unit,
            last_active: variable.last_activity,
            last_value: variable.last_value.value,
            id: variable.id
        }
    });
    return action;
}

export const getVariables = () => {
    var url = `http://things.ubidots.com/api/v1.6/datasources/${data_source_here}/variables/?token=${token_here}&format=json`
    return (dispatch) => {
        return axios.get(url)
            .then(response => {
                dispatch(getVariablesSuccess(response.data.results))
            })
            .catch(error => {
                console.error(error);
            });
    }
}

export const getVariableValuesSuccess = (variable, values) => {
    console.log('getvariablevaluesuccess', variable, values)
    return {
        type: 'VALUES',
        id: variable.id,
        name: variable.name,
        values: values
    }
}

export const getVariableValues = (variable, page) => {
    let url = `http://things.ubidots.com/api/v1.6/variables/${variable.id}/values/?page_size=30&page=${page}&token=${token_here}`
    return (dispatch) => {
        return axios.get(url)
            .then(response => {
                dispatch(getVariableValuesSuccess(variable, response.data.results))
            })
            .catch(error => {
                console.error(error);
            });
    }
}

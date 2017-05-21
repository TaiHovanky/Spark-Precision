import axios from 'axios';

export const testing = () => {
    console.log('action creator running')
    return {
        type: 'TESTING',
        field: [1,2,3]
    }
}

export const getVariableValuesSuccess = (variable, values) => {
    console.log('getvariablesuccess', variable, values)
    return {
        type: 'VALUES',
        name: variable.name,
        unit: variable.unit,
        last_active: variable.last_activity,
        last_value: variable.last_value,
        id: variable.id,
        values: values
    }
}

export const getVariableValues = (variable, page) => {
    console.log('variable in getvariablevalues', variable, page)
    let url = `http://things.ubidots.com/api/v1.6/variables/${variable.id}/values/?page_size=30&page=${page}&token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ`
    return (dispatch) => {
        return axios.get(url)
            .then(response => {
                console.log('response', response.data);
                dispatch(getVariableValuesSuccess(variable, response.data.results))
            })
            .catch(error => {
                console.error(error);
            });
    }
}

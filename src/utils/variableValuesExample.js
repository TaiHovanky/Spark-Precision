import axios from 'axios';

const getValuesExample = (id, page, context) => {
  let url = `http://things.ubidots.com/api/v1.6/variables/${id}/values/?page_size=30&page=${page}&token=${yourTokenHere}`
  axios.get(url)
  .then(response => {
    context.setState({
    values: response.data.results
    })
  })
}

export default getValuesExample;
// Rename the file so that 'Example' is removed. Remove all instances of the word Example and input your token into the URL.
import axios from 'axios';

const getDevicesExample = (context) => {
  var url = `http://things.ubidots.com/api/v1.6/datasources/?token=${yourTokenHere}&format=json`
  axios.get(url)
  .then(response => {
    context.setState({
      devices: response.data.results
    })
  });
}

export default getDevicesExample;
// Rename the file so that 'Example' is removed. Remove all instances of the word Example and input your token into the URL.
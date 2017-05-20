import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import { testing } from './actions/dashboardActions'

const root = document.getElementById('root');
store.subscribe(function() {
  console.log(store.getState())
})
store.dispatch(testing);
ReactDOM.render(
  <div>
  <Provider store={store}>
  <App />
  </Provider>
  </div>, root
);

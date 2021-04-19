import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(reducers);


// Configure axios basic default settings
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api/'

// IN case of issues use this settings
// //axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api';

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

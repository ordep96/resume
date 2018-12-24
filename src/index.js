import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reducers from './reducers/';
import App from './components/';


const store = createStore(
  reducers,
  {}
)


ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root'));



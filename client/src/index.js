import React from 'react';
import  ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
//add file extension when importing non js files, also no need to provide relative path.
import  'materialize-css/dist/css/materialize.min.css';

//redux store at the top of the component
import App from './components/App';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//procide tag is a react component, whenever store chamges provider will make everything inside app component change
ReactDOM.render(
    <Provider store = {store}><App/></Provider>,
    document.querySelector('#root')
 );

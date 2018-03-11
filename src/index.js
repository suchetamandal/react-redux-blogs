import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.css'

import BlogMaster from './components/BlogMaster';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BlogMaster />
  </Provider>
  , document.querySelector('.container'));

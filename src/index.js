import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';

import BlogMaster from './components/BlogMaster';
import BlogEdit from './components/BlogEdit';
import BlogPost from './components/BlogPost';
import reducers from './reducers';
import Header from './components/Header';
import PropTypes from 'prop-types'

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
   <Header/>
    <Switch>
      <Route name="editBlog" path="/blogs/:blog" component={BlogEdit}/>
      <Route path="/" component={BlogMaster}/>
    </Switch>
  </div>  
  </BrowserRouter>  
  </Provider>
  , document.querySelector('.container'));

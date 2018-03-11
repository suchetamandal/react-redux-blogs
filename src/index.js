import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.css'

import BlogMaster from './components/BlogMaster';
import BlogEdit from './components/BlogEdit';
import BlogPost from './components/BlogPost';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
    <Switch>
      <Route path="/blogs/:title" component={BlogEdit}/>
      <Route path="/" component={BlogMaster}/>
    </Switch>
  </div>  
  </BrowserRouter>  
  </Provider>
  , document.querySelector('.container'));

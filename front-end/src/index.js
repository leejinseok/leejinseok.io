import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './reset.css';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import reducers from './reducers';
const enhancer = compose(applyMiddleware(thunk) );
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), enhancer);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App}/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
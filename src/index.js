import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { 
  applyMiddleware, 
  compose, 
  legacy_createStore as createStore 
} from "redux";
import { thunk } from "redux-thunk";
import './index.css';
import App from './App';
import { logger } from './middlewares';
import { rootReducer } from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhacers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composeEnhacers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

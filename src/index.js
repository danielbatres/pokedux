import React from 'react';
import ReactDOM from 'react-dom/client';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from "react-redux";
import { 
  applyMiddleware, 
  compose, 
  legacy_createStore as createStore 
} from "redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import { logger } from './middlewares';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhacers = compose(
  composeAlt,
  applyMiddleware(thunk, logger)
);

const store = createStore(pokemonsReducer, composeEnhacers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

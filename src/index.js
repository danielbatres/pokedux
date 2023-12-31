import React from 'react';
import ReactDOM from 'react-dom/client';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from "react-redux";
import { 
  applyMiddleware, 
  compose, 
  legacy_createStore as createStore 
} from "redux";
import './index.css';
import App from './App';
import { featuring, logger } from './middlewares';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhacers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring)
);

const store = createStore(pokemonsReducer, composeEnhacers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

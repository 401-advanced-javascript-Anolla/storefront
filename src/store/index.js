import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import storefront from './categories';

const rootReducer = combineReducers({ storefront });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
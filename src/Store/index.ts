import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import {counterReducer} from './Counter';

const reducers = combineReducers({
  counter: counterReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({});
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }
    return middlewares;
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contactSlice';
import { filter } from './filterSlice';
import { combineReducers } from 'redux';

const commonReducer = combineReducers({ contacts, filter });

export const store = configureStore({
  reducer: {
    app: commonReducer,
  },
});

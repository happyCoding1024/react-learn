import { createStore, combineReducers } from 'redux';
import { demo } from '../data/demo';

export const store = createStore(combineReducers({ demo }));
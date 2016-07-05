/*
 *
 * Search reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SELECT_TERM,
  LOAD_COUNTS
} from './constants';

const initialState = fromJS({});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SELECT_TERM:
      return state.set('terms', action.terms);
    case LOAD_COUNTS:
      return state.set('counts', action.counts);
    default:
      return state;
  }
}

export default searchReducer;

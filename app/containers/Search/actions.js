/*
 *
 * Search actions
 *
 */

import {
  DEFAULT_ACTION,
  SELECT_TERM
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function selectTerm(terms) {
  return {
    type: SELECT_TERM,
    terms
  }
}

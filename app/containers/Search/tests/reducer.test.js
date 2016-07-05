import expect from 'expect';
import searchReducer from '../reducer';
import { fromJS } from 'immutable';

describe('searchReducer', () => {
  it('returns the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(fromJS({}));
  });
});

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../bench_actions';
import * as ApiUtil from '../../util/bench_api_util';

import { testBenches } from '../../testUtil/bench_helper';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  test('receiveBenches should create an action to receive benches', () => {
    // refer to https://redux.js.org/docs/recipes/WritingTests.html 
    expect(actions.receiveBenches(testBenches)).toEqual(
      {
        type: actions.RECEIVE_BENCHES,
        benches: testBenches
      }
    );
  });
});

describe('async actions', () => {

  test('fetchBenches creates RECEIVE_BENCHES after fetching benches', () => {
    // REFER TO REDUX TESTS DOCS
    // Set up expectedActions:
    // Your code here
    const expectedActions = [
      { 
        type: actions.RECEIVE_BENCHES,
        benches: testBenches, 
      }
    ];
    //jest.fn replaces APIUtil with a mock function 
    //during the test replace that function with this dummy function
    ApiUtil.fetchBenches = jest.fn(() => {
      return Promise.resolve(testBenches);
    });

    const store = mockStore({ benches: {} });
    //when we dispatch actions.fetchBenches(), the jest.fn() gets called instead
    return store.dispatch(actions.fetchBenches()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Explanation of what Promise.resolve does:

// var promise1 = Promise.resolve([1, 2, 3]);

// promise1.then(function (value) {
//   console.log(value);
//   // expected output: Array [1, 2, 3]
// });
import store from '../../Store';
import {increment, decrement} from './counterSlice';

test('Increments value by 1', () => {
  let counterState = store.getState().counter.value;
  expect(counterState).toBe(0);
});

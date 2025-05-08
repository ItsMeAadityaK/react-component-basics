import counterReducer, { increment, decrement, reset } from './counterSlice';

describe('counter reducer', () => {
  const initialState = { value: 0 };

  it('should return the initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({ value: 0 });
  });

  it('should handle increment', () => {
    expect(counterReducer(initialState, increment())).toEqual({ value: 1 });
  });

  it('should handle decrement', () => {
    expect(counterReducer({ value: 2 }, decrement())).toEqual({ value: 1 });
  });

  it('should handle reset', () => {
    expect(counterReducer({ value: 5 }, reset())).toEqual({ value: 0 });
  });
});

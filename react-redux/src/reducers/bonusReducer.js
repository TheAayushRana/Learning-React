import { incBonus, incByAmount } from '../actions';

export function bonusReducer(state = { points: 10 }, action) {
  switch (action.type) {
    case incByAmount:
      if (action.payload > 100 && action.payload < 1000) {
        return { points: state.points + 1 };
      } else if (action.payload >= 1000) {
        return { point: state.points + 5 };
      }
      return state;
    case incBonus:
      return { points: state.points + 1 };
    default:
      return state;
  }
}

import { INCREMENT, DECREMENT } from './landing.acton-types';

interface State {
  counter: number
}

interface Action {
  type: String,
  payload?: any
}

const initState: State = {
  counter: 0
}

export default (state: State = initState, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

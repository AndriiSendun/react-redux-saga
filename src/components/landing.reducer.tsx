import { INCREMENT, DECREMENT } from './landing.acton-types';
import { Action } from 'redux'

interface State {
  counter: number,
  title: string | null,
}

const initState: State = {
  counter: 0,
  title: null
}

export default (state: State = initState, action: Action): State  => {
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

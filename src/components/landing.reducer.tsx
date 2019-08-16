import { INCREMENT, DECREMENT } from './landing.acton-types';
import { Action } from 'redux'

interface State {
  counter: number,
  title: string | null,
  lol: any
}

const initState: State = {
  counter: 0,
  title: null,
  lol: null
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
    case 'FETCH_SUCCEEDED':
      return {
        ...state,
        lol: action
      }
    default:
      return state
  }
}

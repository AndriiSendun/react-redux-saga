import { INCREMENT, DECREMENT, FETCH_REQUESTED } from './landing.acton-types';
import { ActionCreator, Action } from 'redux'

const increment: ActionCreator<Action> = () => ({type: INCREMENT});

const decrement: ActionCreator<Action> = () => ({type: DECREMENT});

const fetch: ActionCreator<Action> = () => ({type: FETCH_REQUESTED});

export {
  increment,
  decrement,
  fetch
}

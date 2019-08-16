import { INCREMENT, DECREMENT } from './landing.acton-types';
import { ActionCreator, Action } from 'redux'

const increment: ActionCreator<Action> = () => ({type: INCREMENT});

const decrement: ActionCreator<Action> = () => ({type: DECREMENT});

export {
  increment,
  decrement
}

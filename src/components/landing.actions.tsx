import { INCREMENT, DECREMENT } from './landing.acton-types';
import { incremment } from './landing.actions';

const increment = () => dispatch => {
  dispatch({type: INCREMENT});
}



export {
  incremment,
  dec
}

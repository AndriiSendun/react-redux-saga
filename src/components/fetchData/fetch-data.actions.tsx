import { Action, ActionCreator } from 'redux';

export const fetchAction: ActionCreator<Action> = (): Action => ({type: 'FETCH'});

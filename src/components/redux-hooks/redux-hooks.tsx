import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { AppState } from '../../models/app-state.models';
import { increment } from '../landing/landing.actions';


const ReduxHooks: React.FC<any> = ():JSX.Element => {
  const selectCounter = (state: AppState): number => state.landingReducer.counter;

  const counter: number = useSelector<AppState, number>(selectCounter);
  const dispatch = useDispatch<Dispatch<Action>>();

    return (
        <div>
          <span>
            UseSelector redux hook
            count is {counter}
          </span>
          <button onClick={() => dispatch(increment())}>Redux Hook Increment</button>
        </div>
    );
}

export default ReduxHooks;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from '../../models/app-state.models';


const ReduxHooks: React.FC<any> = ():JSX.Element => {
  const selectCounter = (state: AppState): number => state.landingReducer.counter;

  const counter: number = useSelector<AppState, number>(selectCounter);

    return (
        <div>
          UseSelector redux hook
          count is {counter}
        </div>
    );
}

export default ReduxHooks;

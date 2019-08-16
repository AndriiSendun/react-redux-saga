import React, { Component, useState, useEffect } from 'react';
import { connect }  from 'react-redux';
import { Dispatch, Action } from 'redux'

import { increment, decrement } from './landing.actions';
import store from '../store';

// INTERFACES
import { AppState }  from '../models/app-state.models'

interface LandingProps {
  counter: number,
  increment: () => void,
  decrement: () => void,
}

interface OwnProps {
  title: string
}

const Landing: React.FC<LandingProps> = (props) => {
    const [ stateTitle, setStateTitle] = useState();

    return (
        <>
            <div>This is value {props.counter}</div>
            <button
              onClick={props.increment}
            >
              Increment
            </button>
            <button
              onClick={props.decrement}
            >
              Decrement
            </button>
        </>
    )
}

interface StateFromProps {
  readonly counter: number
}
interface DispatchFromProps {
  increment: () => void,
  decrement: () => void,
}

const mapStateToProps = (state: any): StateFromProps => {
  console.log(state);
  return {
    counter: state.landingReducer.counter,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect<StateFromProps, DispatchFromProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);

import React, { Component, useState, useEffect } from 'react';
import { connect }  from 'react-redux';

const Landing: React.FunctionComponent = (props) => {
    const [ stateTitle, setStateTitle] = useState();

    return (
        <>
            <div>This is value</div>
            <button

            >
              Increment
            </button>
            <button>
              Decrement
            </button>
        </>
    )
}

export default connect(
  null,
  null
)(Landing);

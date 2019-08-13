import React, { Component, useState, useEffect } from 'react';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const Landing: React.FunctionComponent <LandingProps> = (props) => {
    const [ stateTitle, setStateTitle] = useState();

    return (
        <>
            <div>{props.title}</div>
            <div>{props.name}</div>
        </>
    )
}

interface LandingProps {
    title: String,
    name: String,
}

export default Landing;
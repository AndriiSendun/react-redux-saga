import React, { useState, useEffect } from 'react';
import { useCustomFetch } from './options';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchAction } from './fetch-data.actions';

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const FetchData: React.FC<any> = (props):JSX.Element => {

    // const [data, setData] = useCustomFetch();

    useEffect(() => {
        props.fetch();
    });

    return (
        <div>
            {/* <ul>
                {data.map((item: User) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default FetchData;

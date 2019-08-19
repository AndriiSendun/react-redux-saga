import React, { useState, useEffect } from 'react';
import { useCustomFetch } from './options';

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const FetchData: React.FC<any> = () => {

    const [data, setData] = useCustomFetch();

    return (
        <div>
            <ul>
                {data.map((item: User) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchData;
import React, { useState, useEffect } from 'react';

import InnerHook from './inner-hook';

interface UseTitleInterface {
    title: string,
    onClick: any
}

const Hook: React.FC<any> = () => {
    const [ counter, setCounter ] = useState(3);

    const handleClick = ():void => {
        setCounter(counter + 1);
    }

    const useTitle = (initial: string): UseTitleInterface => {
        const [ title, setTitle ] = useState<string>(initial);

        return {
            title,
            onClick: setTitle
        }
    }

    const user: UseTitleInterface = useTitle('user');

    return (
        <div>
            <span>{user.title}</span>
            <button
             onClick={() => user.onClick('Andrii')}
            >   
                SetTitle
            </button>
            <InnerHook handleClick={handleClick} />
        </div>
    )
}

export default Hook;
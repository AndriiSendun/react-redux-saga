import React, { useState, useEffect } from 'react';

import InnerHook from './inner-hook';

const Hook: React.FC<any> = () => {
    const [ counter, setCounter ] = useState(3);

    const handleClick = ():void => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <span>{counter}</span>
            <button
             onClick={handleClick}
            >   
                SetCounter
            </button>
            <InnerHook handleClick={handleClick} />
        </div>
    )
}

export default Hook;
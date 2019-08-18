import React, { useState, useEffect } from 'react';

const InnerHook: React.FC<any> = (props) => {
    return (
        <div>
            <button
             onClick={props.handleClick}
            >   
                InnerHook Counter
            </button>
        </div>
    )
}

export default InnerHook;
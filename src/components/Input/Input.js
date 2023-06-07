import React from 'react';
import './Input.scss';

const Input = ({className, placeholder, type}) => {
    return (
        <div>
            <input  type={type} className={className} placeholder={placeholder}></input>
        </div>
    )
}

export default Input;

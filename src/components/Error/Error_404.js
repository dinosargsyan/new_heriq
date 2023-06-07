import React from 'react';
import Error from '../Img/error.svg';
import './Error.scss';


const Error_404 = ({className, children}) => {
    return (
        <div>
            <img className="Error" src={Error} />
        </div>
    )
}

export default Error_404;

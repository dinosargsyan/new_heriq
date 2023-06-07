import React from 'react';
import './Layout.scss';

const Layout = ({children}) => {
    return (
        <div className='Layout_div'>
           {children}
        </div>
    )
}

export default Layout;

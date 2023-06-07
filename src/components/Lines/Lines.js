import React from 'react';

const Lines = ({ className, width }) => {
    return (
        <div>
            <hr
                style={{
                    background: 'grey',
                    color: 'grey',
                    borderColor: 'grey',
                    height: '1px',
                    width: {width},
                }}
            />
        </div>
    )
}

export default Lines

import React from 'react'
import './Input.css';
export default React.forwardRef(function Input(props, ref) {

    return (
        <>
            <input className="input" type="text" {...props} ref={ref}/>
        </>
    )
})

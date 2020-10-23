import React from 'react'
import './Input.css';
export default React.forwardRef(function Input(props, ref) {

    return (
        <div className="search-inp-container">
            <span class="material-icons sr-icon">
                search
            </span>
            {props.value && <span class="material-icons close">
                close
            </span>}
            <input className="input" type="text" {...props} ref={ref}/>
        </div>
    )
})

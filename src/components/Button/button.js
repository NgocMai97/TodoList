import React from 'react';
import './button.css';
import Loading from './Loading';
export default function Button({children, loading, ...restProps}){
    return(
        <button {...restProps}>
            {loading && <Loading />}
            <span>{children}</span>    
        </button>
    )
}
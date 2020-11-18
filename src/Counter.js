import React, {useState} from 'react';


// Counter Component
function Counter({value, onChange }) {

    return (
        <div className="counter">
            <b>{value}</b>
            <div className="counter-controls">
                <button onClick={() => onChange(-2)} className="button is-danger is-small">-</button>
                <button onClick={() => onChange(2)} className="button is-success is-small">+</button>
            </div>
        </div>
    );

}

export default Counter;






import React, {useState} from 'react';


// Counter Component
function Counter({value, onDecrement, onIncrement }) {

    return (
        <div className="counter">
            <b>{value}</b>
            <div className="counter-controls">
                <button onClick={() => onDecrement(2)} className="button is-danger is-small">-</button>
                <button onClick={() => onIncrement(2)} className="button is-success is-small">+</button>
            </div>
        </div>
    );

}

export default Counter;






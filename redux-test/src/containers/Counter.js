import React, { useState } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';

const Counter = props =>  {
    let [counter, setCounter] = useState(1) 

    const counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                setCounter( counter + 1 )
                break;
            case 'dec':
                setCounter( counter - 1 )
                break;
            case 'add':
                setCounter( counter + value )
                break;
            case 'sub':
                setCounter( counter - value )
                break;
        }
    }

        return (
            <div>
                <CounterOutput value={props.ctr} />
                <CounterControl label="Increment" clicked={props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={props.onIncrementFive}  />
                <CounterControl label="Subtract 5" clicked={props.onDecrementFive}  />
            </div>
        );
    
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter : () => dispatch({type: 'DECREMENT'}),
        onIncrementFive : () => dispatch({type: 'ADD_INCREMENT',value: 5}),
        onDecrementFive : () => dispatch({type: 'SUB_DECREMENT',value: 5})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
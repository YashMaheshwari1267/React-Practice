import React, { useState } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';

import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';
import { STORE_RESULT, SUB_DECREMENT } from '../store/actions';

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
                <hr />
                <button onClick={props.onStoreResult}> Store Result </button>
                <ul>
                    {props.storeResults.map(strResult => (
                        <li key={strResult.id} onClick={() => props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                    ))}
                </ul>
            </div>
        );
    
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResults: state.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter : () => dispatch({type: actionTypes.DECREMENT}),
        onIncrementFive : () => dispatch({type: actionTypes.ADD_INCREMENT,value: 5}),
        onDecrementFive : () => dispatch({type: actionTypes.SUB_DECREMENT,value: 5}),
        onStoreResult : () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult : (id) => dispatch({type: actionTypes.DELETE_RESULT, strElid: id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
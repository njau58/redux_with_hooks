import React, { Component } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { increment, decrement, addFive, subtractFive} from '../../store/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter =()=>{

    const counter = useSelector(state =>state.counterReducer.counter)

    const dispatch = useDispatch()
    return (
        <div>
            <CounterOutput value={counter} />
            <CounterControl label="increment" clicked={()=>{dispatch(increment())}} />
            <CounterControl label="Decrement" clicked={()=>{dispatch(decrement())}} />
            <CounterControl label="Add 5" clicked={()=>{dispatch(addFive())}}   />
            <CounterControl label="Subtract 5" clicked={()=>{dispatch(subtractFive())}}  />
        </div>
    );
}




export default Counter;
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/counter'
import counter from './reducers'

const store = createStore(counter)
const rootEle = document.getElementById('root')
const render = () => ReactDOM.render(
    <Counter 
     value={store.getState()}
     onIncreatment={() => {store.dispatch({ type: 'INCREAMENT'})}}
     onDecreatment={() => {store.dispatch({ type: 'DECREAMENT'})}}
     />,
    rootEle
    );
render()
// subscribe需要进行监视
store.subscribe(render)

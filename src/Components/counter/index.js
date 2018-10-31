import React from 'react'
import { connect } from 'react-redux'
import * as counterAction from '../../actions/counterAction';
import { bindActionCreators } from 'redux'
function Counter(state,props) {
    return (
        <div>
            <h2>{JSON.stringify(state)}</h2>
            <h1>{state.count}</h1>
            <button onClick={()=>state.counterAction(state.count)}>
                add
            </button>
            <button onClick={()=>state.reduceCounterAction(state.count)}>
                REDUCE
            </button>
            <button onClick={()=>state.resetCounterAction()}>
                reset
            </button>
            <button onClick={()=>state.dobleCounterAction(state.count)}>
                doble
            </button>
        </div>
    )
}


const mapStateToProps = state => ({
    count: state.counterReducer.count
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(counterAction, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)

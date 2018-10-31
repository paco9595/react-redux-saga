import * as Type from '../types';

export const counterAction = (num)=> {
    return {
      type: Type.ADD_COUNTER,
      num: num+1
    }
  }
export const reduceCounterAction = (num)=>({
  type: Type.REDUCE_COUNTER,
  num: num-1
})
export const resetCounterAction = ()=>({
  type: Type.REDUCE_COUNTER,
  num: 0
})
export const dobleCounterAction = (num)=>({
  type: Type.REDUCE_COUNTER,
  num: num * 2
})
import {
    INCREASE_COUNTER,
    DECREASE_COUNTER,
    INCREASE_BY_TWO_COUNTER,
    RESET,
  } from "./actionTypes";
  
  export const arttır = ()=> {
      return {
          type: INCREASE_COUNTER,
          payload:1
      }
  }
  export const eksilt = ()=> {
      return {
          type: DECREASE_COUNTER,
          payload:1
      }
  }
  export const reset = ()=> {
      return {
          type: RESET,
          
      }
  }
  export const arttır2 = ()=> {
      return {
          type: INCREASE_BY_TWO_COUNTER,
          payload:2
      }
  }
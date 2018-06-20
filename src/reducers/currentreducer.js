import {
    CURRENT_SET_NUMBER
  } from '../actions/current';
  
  
export default function (state={number:0}, action) {
    switch (action.type) {
        case CURRENT_SET_NUMBER:
            return {...state, number: action.number};
    }
    return state;
}
  
import {
    ANSWER_ADD
  } from '../actions/answer';
  
  
export default function (state=[], action) {
    switch (action.type) {
        case ANSWER_ADD:
            return [...state, action.answer];
    }
    return state;
}
  
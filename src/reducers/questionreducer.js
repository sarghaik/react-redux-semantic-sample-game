import {
    QUESTIONS_GET
  } from '../actions/question';
  
  
export default function (state=[], action) {
    switch (action.type) {
        case QUESTIONS_GET:
            return action.questions;
    }
    return state;
}
  
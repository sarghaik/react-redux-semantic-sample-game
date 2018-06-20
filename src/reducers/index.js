import { combineReducers } from 'redux';
import questionreducer from './questionreducer';
import answerreducer from './answerreducer';
import currentreducer from './currentreducer';

const rootReducer = combineReducers({
  questions: questionreducer,
  answers: answerreducer,
  current: currentreducer
});

export default rootReducer;

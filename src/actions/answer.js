export const ANSWER_ADD = 'answer_add';

export function addAnswer(data) {
  return function (dispatch) {
    dispatch({
      type: ANSWER_ADD,
      answer: data
    });
  };
}

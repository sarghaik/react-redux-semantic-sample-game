const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export const QUESTIONS_GET = 'question_get';

export function getQuestions(history) {
  return function (dispatch) {
    fetch(API_URL, {
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json())
    .then((data) => {
      dispatch({
        type: QUESTIONS_GET,
        questions: data.results
      });
    }).catch((error) => {
      console.log(error);
      history.push('/error');
    });
  };
}

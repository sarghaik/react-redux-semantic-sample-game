export const CURRENT_SET_NUMBER = 'current_set_number';

export function setCurrentNumber(num) {
  return function (dispatch) {
    dispatch({
      type: CURRENT_SET_NUMBER,
      number: num
    });
  };
}

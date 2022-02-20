import { CHANGE_INPUT_VALUE } from './action';

export const demo = (state = {}, action: any) => {
  const { type, data} = action;
  console.log(action);

  switch (type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        value: data.value,
      }
    default:
      return {
        ...state
      }
  }
}
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (value: string) => {
  return {
    type: CHANGE_INPUT_VALUE,
    data: {
      value,
    }
  }
}
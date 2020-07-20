export const initialState = {};

const funcName = (state, payLoad) => {
  const newState = {...state};
  return newState;
};

export default function infinite(state = initialState, action) {
  switch (action.type) {
    case 'ACTION':
      return funcName(state, action.payLoad);
  }
  return state;
}

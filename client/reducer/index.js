const weather = (state = 0, action) => {
  switch (action.tyep){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state  - 1;
    default:
      return state;
  }
}

export default weather;

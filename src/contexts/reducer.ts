
const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleLoader':
      return { loading: !state.loading };
      break;
    case 'onLoader':
      return { loading: true };
      break;
    case 'offLoader':
      return { loading: false };
      break;
  
    default:
      throw new Error( 'Reducer says: Action undefined' );
      break;
  }
}

export default reducer;
export { reducer };

const initialState = {
  openModal: false
}

const modal = (state=initialState,action) => {
  switch(action.type) {
    case 'OPEN_AND_CLOSE_MODAL':
      return {
        openModal: action.payload.status
      }
    break;
    default:
      return state
    break;
  }
}

export default modal;
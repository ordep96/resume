const initialState = {
  details: JSON.parse(localStorage.getItem('details')) ? JSON.parse(localStorage.getItem('details')) : {}
}

const personalDetails = (state=initialState,action) => {
  switch(action.type) {
    case 'ADD_PERSONAL_DETAILS':
      localStorage.setItem('details', JSON.stringify(action.payload.data));
      return {
        details: action.payload.data
      }
    break;
    default:
      return state
  }
}

export default personalDetails;
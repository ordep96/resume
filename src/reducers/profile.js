const initialState = {
  profile: JSON.parse(localStorage.getItem('profile')) ? JSON.parse(localStorage.getItem('profile')) : ""
}

const profile = (state = initialState, action ) => {
  switch(action.type) {
    case 'ADD_PROFILE' :
    localStorage.setItem('profile', JSON.stringify(action.payload.profile));
     return {
       ...state,
       profile: action.payload.profile
     }
    break;
    default: 
      return state
  }
}

export default profile;
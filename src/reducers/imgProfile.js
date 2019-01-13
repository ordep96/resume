const initialState = {
  img: JSON.parse(localStorage.getItem('imgProfile')) ? JSON.parse(localStorage.getItem('imgProfile')) : null
}

const imgProfile = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PROFILE_IMG' : 
    localStorage.setItem('imgProfile', JSON.stringify(action.payload.img));
     return {
       img: action.payload.img
     }
    break;
    default: 
      return state
  }
}


export default imgProfile;

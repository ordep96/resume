const initialState = {
  imgCrop: JSON.parse(localStorage.getItem('imgProfile')) ? JSON.parse(localStorage.getItem('imgProfile')) : null,
  imgToCrop: JSON.parse(localStorage.getItem('imgToCrop')) ? JSON.parse(localStorage.getItem('imgToCrop')) : null,
  scaleImg: JSON.parse(localStorage.getItem('scaleImg')) ? JSON.parse(localStorage.getItem('scaleImg')) : 1
}

const imgProfile = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PROFILE_IMG' : 
    localStorage.setItem('imgProfile', JSON.stringify(action.payload.img));
     return {
       ...state,
       imgCrop: action.payload.img
     }
    break;
    case 'ADD_IMG_TO_CROP' :
      localStorage.setItem('imgToCrop', JSON.stringify(action.payload.img))
      return {
        ...state,
        imgToCrop: action.payload.img
      } 
    break;
    case 'SCALE_IMG':
      localStorage.setItem('scaleImg', action.payload.scale);
      return {
        ...state,
        scaleImg: action.payload.scale
      }
    break;
    case 'DELETE_IMG':
      localStorage.removeItem('imgProfile');
      localStorage.removeItem('imgToCrop');
      localStorage.removeItem('scaleImg');
      return {
        imgCrop: null,
        imgToCrop: null,
        scaleImg: 1
      }
    break;
    default: 
      return state
  }
}


export default imgProfile;

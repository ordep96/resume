const initialState = {
  selectColor: localStorage.getItem('select_color') ? localStorage.getItem('select_color') : ''
}

const color = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_COLOR_TEMPLATE' : 
     localStorage.setItem('select_color', action.payload.color);
     return {
       selectColor: action.payload.color
     }
    break;
    default: 
      return state
  }
}


export default color;
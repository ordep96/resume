
export const selectColorTemplate = color => {
  return {
    type: 'SELECT_COLOR_TEMPLATE',
    payload: {
      color
    }
  }
}


export const addPersonalDetails = data => {
  return {
    type: 'ADD_PERSONAL_DETAILS',
    payload: {
      data
    }
  }
}

export const openModal = status => {
  return {
    type: 'OPEN_AND_CLOSE_MODAL',
    payload: {
      status
    }
  }
}
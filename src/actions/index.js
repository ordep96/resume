
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

export const addProfileImg = img => {
  return {
    type: 'ADD_PROFILE_IMG',
    payload: {
      img
    }
  }
}

export const addImgToCrop = img => {
  return {
    type: 'ADD_IMG_TO_CROP',
    payload: {
      img
    }
  }
}

export const scaleImg = scale => {
  return {
    type: 'SCALE_IMG',
    payload: {
      scale
    }
  }
}

export const deleteImg = () => {
  return {
    type: 'DELETE_IMG'
  }
}

export const addProfile = (profile) => {
  return {
    type: 'ADD_PROFILE',
    payload: {
      profile
    }
  }
}
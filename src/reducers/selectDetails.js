export const isLoadingDetails = (state = { isLoading: false, url: '' }, action) => {
  switch (action.type) {
    case 'IS_lOADING_DETAILS':
      return { ...action }

    default:
      return state
  }
}

export const hasErrorDetails = (state = false, action) => {
  switch (action.type) {
    case 'HAS_ERROR_DETAILS':
      return action.hasError

    default:
      return state
  }
}

export const selectDetails = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_PEOPLE_DETAILS':
      return (!action.addDetails)
        ? [...state, action.details]
        : state.filter(item => {
          return item.url !== action.details.url
        })
    default:
      return state
  }
}

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_lOADING':
      return action.isLoading

    default:
      return state
  }
}

export const hasError = (state = false, action) => {
  switch (action.type) {
    case 'HAS_ERROR':
      return action.hasError

    default:
      return state
  }
}

export const selectPeople = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_PEOPLE':
      return [...action.people]

    default:
      return state
  }
}

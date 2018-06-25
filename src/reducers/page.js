export const page = (state = 1, action) => {
  switch (action.type) {
    case 'PAGE':
      return action.pageNumber

    default:
      return state
  }
}

export const numberOfPages = (state = 0, action) => {
  switch (action.type) {
    case 'NUMBER_OF_PAGES':
      return action.numberOfPages

    default:
      return state
  }
}

export const selectNumberInPages = (state = '10', action) => {
  switch (action.type) {
    case 'SELECT_NUMBER_IN_PAGE':
      return action.value

    default:
      return state
  }
}

export const numberOfRecords = (state = 0, action) => {
  switch (action.type) {
    case 'NUMBER_OF_RECORDS':
      return action.numberOfRecords

    default:
      return state
  }
}

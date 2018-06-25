export const sort = (state = { doubleSort: false, fieldSort: '' }, action) => {
  switch (action.type) {
    case 'SORT':
      return {
        doubleSort: action.doubleSort,
        fieldSort: action.fieldSort
      }

    default:
      return state
  }
}

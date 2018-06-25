export const PAGE = 'PAGE'
export const NUMBER_OF_PAGES = 'NUMBER_OF_PAGES'
export const SELECT_NUMBER_IN_PAGE = 'SELECT_NUMBER_IN_PAGE'
export const NUMBER_OF_RECORDS = 'NUMBER_OF_RECORDS'

export const page = (number) => ({
  type: PAGE,
  pageNumber: number
})

export const numberOfPages = (kol) => ({
  type: NUMBER_OF_PAGES,
  numberOfPages: kol
})

export const selectNumberInPages = (value) => ({
  type: SELECT_NUMBER_IN_PAGE,
  value: value
})

export const numberOfRecords = (value) => ({
  type: NUMBER_OF_RECORDS,
  numberOfRecords: value
})

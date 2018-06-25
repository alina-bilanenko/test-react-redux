import { combineReducers } from 'redux'
import { isLoading, hasError, selectPeople } from './selectPeople'
import { isLoadingDetails, hasErrorDetails, selectDetails } from './selectDetails'
import { page, numberOfPages, selectNumberInPages, numberOfRecords } from './page'
import { sort } from './sort'
import { filter } from './filter'

export const reducer = combineReducers({
  pages: combineReducers({
    page,
    numberOfPages,
    selectNumberInPages,
    numberOfRecords
  }),
  people: combineReducers({
    isLoading,
    hasError,
    selectPeople
  }),
  details: combineReducers({
    isLoadingDetails,
    hasErrorDetails,
    selectDetails
  }),
  sort,
  filter
})

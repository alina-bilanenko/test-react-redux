import axios from 'axios'
import { numberOfPages, numberOfRecords, page } from './actionPages'
import { addFilter, sortNumber, sortString } from '../functions'

export const URL = 'https://www.swapi.co/api/people/'
export const IS_lOADING = 'IS_lOADING'
export const SELECT_PEOPLE = 'SELECT_PEOPLE'
export const HAS_ERROR = 'HAS_ERROR'

export const isLoading = (bool) => ({
  type: IS_lOADING,
  isLoading: bool
})

export const selectPeople = (people) => ({
  type: SELECT_PEOPLE,
  people
})

export const hasError = (bool) => ({
  type: HAS_ERROR,
  hasError: bool
})

export const axiosPeople = (filter, selectNumberInPages, sortPeople) => dispatch => {
  let count = 0
  let arrResults = []
  dispatch(isLoading(true))
  axios.get(URL)
    .then((response) => {
      count = Math.ceil(response.data.count / response.data.results.length)
      if (count < 2) return response.data.results
      let promiseArr = []
      promiseArr.push(response)
      for (let i = 2; i <= count; i++) {
        promiseArr.push(axios.get(`${URL}?page=${i}`))
      }

      return Promise.all(promiseArr)
        .then(allResponses => {
          allResponses.forEach(oneResponse => {
            if (oneResponse.status >= 300) {
              throw Error(oneResponse.statusText)
            }
            arrResults.push(...oneResponse.data.results)
          })
          return arrResults
        })
    })
    .then(results => {
      let filterPeople = addFilter(results, filter)

      filterPeople.sort((a, b) => {
        if (sortPeople.fieldSort === 'name') {
          return sortString(a, b, sortPeople.fieldSort, sortPeople.doubleSort)
        } else {
          return sortNumber(a, b, sortPeople.fieldSort, sortPeople.doubleSort)
        }
      })

      dispatch(isLoading(false))
      dispatch(selectPeople(filterPeople))
      dispatch(numberOfRecords(filterPeople.length))
      dispatch(page(1))
      dispatch(numberOfPages(Math.ceil(filterPeople.length / selectNumberInPages)))
    })
    .catch(() => dispatch(hasError(true)))
}

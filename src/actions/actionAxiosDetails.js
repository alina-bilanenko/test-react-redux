import axios from 'axios/index'

export const IS_lOADING_DETAILS = 'IS_lOADING_DETAILS'
export const SELECT_PEOPLE_DETAILS = 'SELECT_PEOPLE_DETAILS'
export const HAS_ERROR_DETAILS = 'HAS_ERROR'

export const isLoadingDetails = (bool, url) => ({
  type: IS_lOADING_DETAILS,
  isLoading: bool,
  url: url
})

export const selectDetails = (details, addDetails) => ({
  type: SELECT_PEOPLE_DETAILS,
  details,
  addDetails
})

export const hasErrorDetails = (bool) => ({
  type: HAS_ERROR_DETAILS,
  hasError: bool
})

export const axiosDetails = (obj, hasElement) => dispatch => {
  if (!hasElement) {
    dispatch(isLoadingDetails(true, obj.url))
    let promiseArr = []
    promiseArr.push(axios.get(obj.homeworld))
    promiseArr.push(
      Promise.all(
        obj.species.map(
          item => axios.get(item)
        )
      )
    )
    promiseArr.push(
      Promise.all(
        obj.vehicles.map(
          item => axios.get(item)
        )
      )
    )
    Promise.all(promiseArr)
      .then(([homeworld, species, vehicles]) => {
        let responses = [homeworld, ...species, ...vehicles]
        responses.forEach(response => {
          if (response.status >= 300) {
            throw Error(response.statusText)
          }
        })
        dispatch(selectDetails({
          url: obj.url,
          homeworld: homeworld,
          species: species,
          vehicles: vehicles
        },
        hasElement
        ))
        dispatch(isLoadingDetails(false, obj.url))
      })
      .catch(() => dispatch(hasErrorDetails(true)))
  } else {
    dispatch(selectDetails({ url: obj.url }, hasElement))
  }
}

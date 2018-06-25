import React from 'react'
import { Vehicle } from './subTable/Vehicle'
import { Species } from './subTable/Species'
import { Homeworld } from './subTable/Homeworld'
import PropTypes from 'prop-types'

export const TablePanel = ({ dataDetails, hasErrorDetails, isLoadingDetails, openPanel }) => {
  if (hasErrorDetails) {
    return (
      <tr>
        <td colSpan='9'>
          <div className='error'>
            <div className='fa-5x'>
              <i className='fas fa-exclamation-triangle' />
            </div>
            <p className='errorText'>Sorry! There was an error loading the items</p>
          </div>
        </td>
      </tr>
    )
  }
  if (isLoadingDetails.isLoading && isLoadingDetails.url === openPanel) {
    return (
      <tr>
        <td colSpan='9'>
          <div className='loader'>
            <div className='fa-5x'>
              <i className='fas fa-spinner fa-pulse' />
            </div>
            <p className='loaderText'>Loading…</p>
          </div>
        </td>
      </tr>
    )
  }
  return (dataDetails)
    ? (
      <tr>
        <td colSpan='9' className='td-padding'>
          <h3>Homeworld</h3>
          <Homeworld
            homeworld={dataDetails.homeworld.data}
          />
          <h3>Species</h3>
          <Species
            species={dataDetails.species}
          />
          <h3>Vehicle</h3>
          <Vehicle
            vehicles={dataDetails.vehicles}
          />
        </td>
      </tr>
    )
    : <tr />
}

TablePanel.propTypes = {
  dataDetails: PropTypes.object,
  isLoadingDetails: PropTypes.object,
  hasErrorDetails: PropTypes.bool,
  openPanel: PropTypes.string
}

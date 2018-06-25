import React from 'react'
import PropTypes from 'prop-types'

export const Vehicle = ({ vehicles }) => (
  <React.Fragment>{vehicles.map((row, ind) =>
    <div className='subTable' key={ind}>
      <span className='bold'>name:</span>
      <span>{row.data.name}</span>
      <span className='bold'>model:</span>
      <span>{row.data.model}</span>
      <span className='bold'>manufacturer:</span>
      <span>{row.data.manufacturer}</span>
    </div>
  )}
  </React.Fragment>
)

Vehicle.propTypes = {
  vehicles: PropTypes.array
}

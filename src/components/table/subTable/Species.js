import React from 'react'
import PropTypes from 'prop-types'

export const Species = ({ species }) => (
  <React.Fragment>{species.map((row, ind) =>
    <div className='subTable' key={ind}>
      <span className='bold'>name:</span>
      <span>{row.data.name}</span>
      <span className='bold'>classification:</span>
      <span>{row.data.classification}</span>
      <span className='bold'>designation:</span>
      <span>{row.data.designation}</span>
    </div>
  )}
  </React.Fragment>
)

Species.propTypes = {
  species: PropTypes.array
}

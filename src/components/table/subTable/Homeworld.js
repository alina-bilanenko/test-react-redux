import React from 'react'
import PropTypes from 'prop-types'

export const Homeworld = ({ homeworld }) => (
  <div className='subTable'>
    <div className='subTableVer bold'>
      <span>name:</span>
      <span>rotation_period:</span>
      <span>orbital_period:</span>
      <span>diameter:</span>
    </div>
    <div className='subTableVer'>
      <span>{homeworld.name}</span>
      <span>{homeworld.rotation_period}</span>
      <span>{homeworld.orbital_period}</span>
      <span>{homeworld.diameter}</span>
    </div>
    <div className='subTableVer bold'>
      <span>climate:</span>
      <span>gravity:</span>
      <span>terrain:</span>
      <span>population:</span>
    </div>
    <div className='subTableVer'>
      <span>{homeworld.climate}</span>
      <span>{homeworld.gravity}</span>
      <span>{homeworld.terrain}</span>
      <span>{homeworld.population}</span>
    </div>
  </div>
)

Homeworld.propTypes = {
  homeworld: PropTypes.object
}

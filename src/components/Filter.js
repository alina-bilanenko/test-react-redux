import React from 'react'
import PropTypes from 'prop-types'
import { DropdownButton, MenuItem, Checkbox } from 'react-bootstrap'
import { stopEvent } from '../functions'

export const Filter = ({ filter, onClickChangeFilter, onClickAxiosPeople, pages, sort }) => {
  function selectFilter (e, name) {
    const newFilter = { ...filter }
    if (name === 'gender' || name === 'mass') {
      newFilter[name] = e
    } else if (name === 'hair_color') {
      newFilter[name] = []
      let checkbox = document.querySelectorAll('#checkbox ~ ul input[type=checkbox]:checked')
      for (let i = 0; i < checkbox.length; ++i) {
        newFilter[name].push(checkbox[i].name)
      }
    }
    onClickChangeFilter(newFilter)
    onClickAxiosPeople(newFilter, pages.selectNumberInPages, sort)
  }

  function filterMass (mass) {
    switch (mass) {
      case '0':
        return '< 50'
      case '50':
        return ' 50 - 100 '
      case '100':
        return ' 100 - 150 '
      case '150':
        return ' > 150 '
      case 'all':
        return ' all '
      default:
        return ' all '
    }
  }

  return (
    <div className='filterAll'>
      <h3>Filters: </h3>
      <div className='filters'>
        <div className='block'>
          <span>Gender: </span>
          <DropdownButton
            title={filter.gender}
            onSelect={(e) => selectFilter(e, 'gender')}
            id='dropdown-size-medium'
          >
            <MenuItem eventKey='male'>male</MenuItem>
            <MenuItem eventKey='female'>female</MenuItem>
            <MenuItem eventKey='all'>all</MenuItem>
          </DropdownButton>
        </div>

        <div className='block'>
          <span>Hair color: </span>
          <DropdownButton
            title={(filter.hair_color.join(', ') === '')
              ? 'Enter hair color...'
              : filter.hair_color.join(', ')
            }
            id='checkbox'
            className='changeHover'
          >
            <MenuItem onChange={(e) => selectFilter(e, 'hair_color')} id='checkbox'>
              <Checkbox onClick={stopEvent} name='blonde'>blonde</Checkbox>
              <Checkbox onClick={stopEvent} name='brown'>brown</Checkbox>
              <Checkbox onClick={stopEvent} name='black'>black</Checkbox>
              <Checkbox onClick={stopEvent} name='red'>red</Checkbox>
              <Checkbox onClick={stopEvent} defaultChecked name='all'>all</Checkbox>
            </MenuItem>
          </DropdownButton>
        </div>

        <div className='block'>
          <span>Mass: </span>
          <DropdownButton
            title={filterMass(filter.mass)}
            onSelect={(e) => selectFilter(e, 'mass')}
            id='dropdown-size-medium'
            onClick={stopEvent}
          >
            <MenuItem eventKey='0'> &#8249; 50 </MenuItem>
            <MenuItem eventKey='50'> 50 - 100 </MenuItem>
            <MenuItem eventKey='100'> 100 - 150 </MenuItem>
            <MenuItem eventKey='150'> &#8250; 150 </MenuItem>
            <MenuItem eventKey='all'> all </MenuItem>
          </DropdownButton>
        </div>
      </div>
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.object,
  onClickChangeFilter: PropTypes.func,
  onClickAxiosPeople: PropTypes.func,
  pages: PropTypes.object,
  sort: PropTypes.object
}

import React from 'react'
import { TablePanel } from './TablePanel'
import PropTypes from 'prop-types'

const nameColumns = [
  'name',
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender'
]

export const Row = ({
  onClickAxiosDetails,
  rowPeople,
  details: {
    isLoadingDetails,
    hasErrorDetails,
    selectDetails
  }
}) => {
  const findDetails = selectDetails.find(item => {
    return item.url === rowPeople.url
  })

  return (
    <React.Fragment>
      <tr
        onClick={() => onClickAxiosDetails(
          rowPeople,
          findDetails
        )}
      >
        {nameColumns.map((item) => (
          <td key={item}>
            {rowPeople[item]}
          </td>
        ))
        }
        <td>
          <span>edit</span><br />
          <span>remove</span><br />
          <span>disable</span>
        </td>
      </tr>
      <TablePanel
        dataDetails={selectDetails.find(item => {
          return item.url === rowPeople.url
        })}
        hasErrorDetails={hasErrorDetails}
        isLoadingDetails={isLoadingDetails}
        openPanel={rowPeople.url}
      />
    </React.Fragment>
  )
}

Row.propTypes = {
  onClickAxiosDetails: PropTypes.func,
  details: PropTypes.object,
  rowPeople: PropTypes.object
}

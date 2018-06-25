import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Row } from './Row'
import PropTypes from 'prop-types'
import '../../css/tablePanel.css'
import { sortString, sortNumber } from '../../functions'

class TableData extends Component {
  clickSort = (e) => {
    const field = e.currentTarget.innerText.replace(/ /g, '_').toLowerCase()
    const doubleSort = this.props.sort.fieldSort === field ? !this.props.sort.doubleSort : true
    const people = this.props.people.selectPeople
    let resultSort = people.slice().sort((a, b) => {
      if (field === 'name') {
        return sortString(a, b, field, doubleSort)
      } else {
        return sortNumber(a, b, field, doubleSort)
      }
    })

    this.props.onClickChangeSort(doubleSort, field, resultSort)
  }

  render () {
    const {
      people,
      details,
      sort: { doubleSort, fieldSort },
      pages: { page, selectNumberInPages },
      onClickAxiosDetails
    } = this.props

    if (people.hasError) {
      return (
        <div className='error'>
          <div className='fa-10x'>
            <i className='fas fa-exclamation-triangle' />
          </div>
          <p className='errorText'>Sorry! There was an error loading the items</p>
        </div>
      )
    }

    if (people.isLoading) {
      return (
        <div className='loader'>
          <div className='fa-10x'>
            <i className='fas fa-spinner fa-pulse' />
          </div>
          <p className='loaderText'>Loading…</p>
        </div>
      )
    }

    return (
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
            <th onClick={this.clickSort}>
              <span className='left'>Name</span>
              <i
                className={fieldSort !== 'name'
                  ? 'fas fa-sort right'
                  : doubleSort
                    ? 'fas fa-sort-up right'
                    : 'fas fa-sort-down right'}
              />
            </th>
            <th onClick={this.clickSort}>
              <span className='left'>Height</span>
              <i
                className={fieldSort !== 'height'
                  ? 'fas fa-sort right'
                  : doubleSort
                    ? 'fas fa-sort-up right'
                    : 'fas fa-sort-down right'}
              />
            </th>
            <th onClick={this.clickSort}>
              <span className='left'>Mass</span>
              <i
                className={fieldSort !== 'mass'
                  ? 'fas fa-sort right'
                  : doubleSort
                    ? 'fas fa-sort-up right'
                    : 'fas fa-sort-down right'}
              />
            </th>
            <th>Hair color</th>
            <th>Skin color</th>
            <th>Eye color</th>
            <th onClick={this.clickSort}>
              <span className='left'>Birth year</span>
              <i
                className={fieldSort !== 'birth_year'
                  ? 'fas fa-sort right'
                  : doubleSort
                    ? 'fas fa-sort-up right'
                    : 'fas fa-sort-down right'}
              />
            </th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.selectPeople.slice((page - 1) * selectNumberInPages, page * selectNumberInPages)
            .map((item, ind) => (
              <Row rowPeople={item}
                key={ind}
                onClickAxiosDetails={onClickAxiosDetails}
                details={details}
              />
            )
            )}
        </tbody>
      </Table>
    )
  }
}

TableData.propTypes = {
  sort: PropTypes.object,
  onClickChangeSort: PropTypes.func,
  onClickAxiosDetails: PropTypes.func,
  people: PropTypes.object,
  details: PropTypes.object,
  pages: PropTypes.object
}

export default TableData

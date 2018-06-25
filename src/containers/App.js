import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Grid, Row, Col, Panel } from 'react-bootstrap'

import { numberOfPages, page, selectNumberInPages } from '../actions/actionPages'
import { axiosDetails } from '../actions/actionAxiosDetails'
import { sort } from '../actions/actionSort'
import { axiosPeople, selectPeople } from '../actions/actionAxiosPeople'
import { filter } from '../actions/actionFilter'

import TableData from '../components/table/TableData'
import Paginations from '../components/pagination/Paginations'
import { SelectNumberInPages } from '../components/SelectNumberInPages'
import { Filter } from '../components/Filter'

class App extends Component {
  componentDidMount () {
    this.props.onClickAxiosPeople(
      this.props.filter,
      this.props.pages.selectNumberInPages,
      this.props.sort
    )
  }

  render () {
    const {
      pages,
      people,
      details,
      sort,
      filter,
      onClickAxiosPeople,
      onClickAxiosDetails,
      onClickPageChange,
      onClickPage,
      onClickChangeSort,
      onClickChangeFilter
    } = this.props

    return (
      <Grid>
        <Row className='show-grid'>
          <Col md={12}>
            <div>
              <Panel>
                <Panel.Heading>
                  <Filter
                    filter={filter}
                    onClickChangeFilter={onClickChangeFilter}
                    onClickAxiosPeople={onClickAxiosPeople}
                    pages={pages}
                    sort={sort}
                  />
                  <SelectNumberInPages
                    pages={pages}
                    onClickPageChange={onClickPageChange}
                  />
                </Panel.Heading>
                <Panel.Body>
                  <TableData
                    onClickChangeSort={onClickChangeSort}
                    sort={sort}
                    people={people}
                    pages={pages}
                    onClickAxiosDetails={onClickAxiosDetails}
                    details={details}
                  />
                </Panel.Body>
                <Panel.Footer className='text-right'>
                  <Paginations
                    pages={pages}
                    onClickPage={onClickPage}
                  />
                </Panel.Footer>
              </Panel>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = ({ people, details, pages, sort, filter }) => {
  return {
    people,
    details,
    pages,
    sort,
    filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAxiosPeople: (filter, selectNumberInPages, sortPeople) => {
      dispatch(axiosPeople(filter, selectNumberInPages, sortPeople))
    },
    onClickAxiosDetails: (obj, hasElement) => dispatch(axiosDetails(obj, hasElement)),
    onClickPageChange: (number, numberPage, records) => {
      dispatch(selectNumberInPages(number))
      dispatch(page(numberPage))
      dispatch(numberOfPages(Math.ceil(records / parseInt(number, 10))))
    },
    onClickChangeSort: (doubleSort, fieldSort, result) => {
      dispatch(sort(doubleSort, fieldSort))
      dispatch(selectPeople(result))
    },
    onClickChangeFilter: value => dispatch(filter(value)),
    onClickPage: value => dispatch(page(value))
  }
}

App.propTypes = {
  pages: PropTypes.object,
  people: PropTypes.object,
  details: PropTypes.object,
  sort: PropTypes.object,
  filter: PropTypes.object,
  onClickAxiosPeople: PropTypes.func,
  onClickAxiosDetails: PropTypes.func,
  onClickPageChange: PropTypes.func,
  onClickChangeSort: PropTypes.func,
  onClickChangeFilter: PropTypes.func,
  onClickPage: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

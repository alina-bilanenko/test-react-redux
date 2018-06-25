import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, DropdownButton, MenuItem } from 'react-bootstrap'

export const SelectNumberInPages = ({ pages, onClickPageChange }) => {
  function clickSelectNumInPages (event) {
    onClickPageChange(event, 1, pages.numberOfRecords)
  }

  return <Row>
    <Col xs={12} md={12}>
      <span>Number of records per page: </span>
      <DropdownButton
        title={pages.selectNumberInPages}
        onSelect={clickSelectNumInPages}
        id='dropdown-size-medium'
      >
        <MenuItem eventKey='10'>10</MenuItem>
        <MenuItem eventKey='20'>20</MenuItem>
        <MenuItem eventKey='30'>30</MenuItem>
      </DropdownButton>
    </Col>
  </Row>
}

SelectNumberInPages.propTypes = {
  onClickPageChange: PropTypes.func,
  pages: PropTypes.object
}

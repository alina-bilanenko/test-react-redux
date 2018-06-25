import React from 'react'
import { Pagination } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const PageItems = ({ onClickPage, page, numberOfPages, changePaginations }) => {
  let active = page
  let items = []
  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <Pagination.Item
        active={number === active}
        key={number}
        onClick={() =>
          changePaginations(number, onClickPage, number === active)
        }
      >
        {number}
      </Pagination.Item>
    )
  }
  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  )
}

PageItems.propTypes = {
  page: PropTypes.number,
  numberOfPages: PropTypes.number,
  onClickPage: PropTypes.func,
  changePaginations: PropTypes.func
}

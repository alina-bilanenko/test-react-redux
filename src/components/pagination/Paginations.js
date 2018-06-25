import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'react-bootstrap'
import { PageItems } from './PageItems'

class Paginations extends Component {
  static changePaginations (numPage, onClickPage, disabled) {
    if (disabled) return
    onClickPage(numPage)
  }

  render () {
    const { onClickPage, pages: { page, numberOfPages } } = this.props

    if (!numberOfPages) {
      return <p />
    }

    return (
      <Pagination bsSize='medium'>
        <Pagination.First
          disabled={page === 1}
          onClick={() =>
            Paginations.changePaginations(
              1,
              onClickPage,
              page === 1)
          }
        />
        <Pagination.Prev
          disabled={page === 1}
          onClick={() =>
            Paginations.changePaginations(
              page - 1,
              onClickPage,
              page === 1)
          }
        />
        <PageItems
          onClickPage={onClickPage}
          page={page}
          numberOfPages={numberOfPages}
          changePaginations={Paginations.changePaginations}
        />
        <Pagination.Next
          disabled={page === numberOfPages}
          onClick={() =>
            Paginations.changePaginations(
              page + 1,
              onClickPage,
              page === numberOfPages)
          }
        />
        <Pagination.Last
          disabled={page === numberOfPages}
          onClick={() =>
            Paginations.changePaginations(numberOfPages,
              onClickPage,
              page === numberOfPages)
          }
        />
      </Pagination>
    )
  }
}

Paginations.propTypes = {
  pages: PropTypes.object,
  onClickPage: PropTypes.func
}

export default Paginations

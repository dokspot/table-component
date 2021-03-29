import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function InputPage({
  gotoPage,
  pageIndex,
  pageCount
}) {
  return (
    <>
      <span className='mr-1'>Go to page:</span>
      <Form.Control
        type='number'
        size='sm'
        defaultValue={pageIndex + 1}
        min={1}
        max={pageCount}
        onChange={e => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0
          gotoPage(page)
        }}
        style={{ width: '48px', display: 'inline' }}
        data-testid='input'
      />
    </>
  )
}

InputPage.propTypes = {
  gotoPage: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired
}
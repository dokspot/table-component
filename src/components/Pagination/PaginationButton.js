import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function PaginationButton({
  gotoPage,
  pageIndex,
  pageNumber
}) {
  return (
    <Button
      variant='white'
      className={ pageNumber === pageIndex ? 'text-primary' : '' }
      onClick={() => gotoPage(pageNumber)}
      data-testid='button'
    >{ pageNumber + 1 }</Button>
  )
}

PaginationButton.propTypes = {
  gotoPage: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired
}
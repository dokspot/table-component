import PaginationButton from './PaginationButton'
import { times } from 'lodash'
import PropTypes from 'prop-types'

export default function PaginationMedium({
  gotoPage,
  pageCount,
  pageIndex
}) {
  return (
    <>
      { times(pageCount, (pageNumber) => (
        <PaginationButton
          key={pageNumber}
          pageIndex={pageIndex}
          gotoPage={gotoPage}
          pageNumber={pageNumber}
        />
      ))}
    </>
  )
}

PaginationMedium.propTypes = {
  gotoPage: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired
}
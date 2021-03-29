import PropTypes from 'prop-types'
import SelectPageSize from './SelectPageSize'
import PaginationMedium from './PaginationMedium'
import PaginationLarge from './PaginationLarge.js'
import InputPage from './InputPage'
import { ButtonGroup } from 'react-bootstrap'

export default function Pagination({
  rows,
  gotoPage,
  previousPage,
  nextPage,
  setPageSize,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageSize,
}) {
  return (
    <div className='d-flex justify-content-end align-items-center text-muted'>
      <div className="mr-2">{rows.length} Results</div>
      <SelectPageSize rows={rows} pageSize={pageSize} setPageSize={setPageSize} />
      <div className="mr-2">
        <ButtonGroup size='sm' style={{ verticalAlign: 'inherit' }}>
          { pageCount < 6
            ? <PaginationMedium gotoPage={gotoPage} pageCount={pageCount} pageIndex={pageIndex} />
            : <PaginationLarge
              gotoPage={gotoPage}
              pageCount={pageCount}
              pageIndex={pageIndex}
              canNextPage={canNextPage}
              canPreviousPage={canPreviousPage}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          }
        </ButtonGroup>
      </div>
      <div><InputPage pageIndex={pageIndex} pageCount={pageCount} gotoPage={gotoPage} /></div>
    </div>
  )
}

Pagination.protoTypes = {
  rows: PropTypes.array.isRequired,
  gotoPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  setPageSize: PropTypes.func.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
}
import PaginationButton from './PaginationButton'
import { times } from 'lodash'

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
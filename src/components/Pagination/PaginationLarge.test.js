import { render, fireEvent, screen } from '@testing-library/react'
import PaginationLarge from './PaginationLarge'

test('onClick - previousPage', () => {
  const previousPage = jest.fn()
  const nextPage = jest.fn()
  render(
    <PaginationLarge
      previousPage={previousPage}
      canPreviousPage={true}
      nextPage={nextPage}
      canNextPage={true}
      pageIndex={9}
      pageCount={15}
      gotoPage={jest.fn()}
    />
  )
  fireEvent.click(screen.getByTestId('previousPage'))
  expect(previousPage).toHaveBeenCalledTimes(1)

  fireEvent.click(screen.getByTestId('nextPage'))
  expect(nextPage).toHaveBeenCalledTimes(1)
})
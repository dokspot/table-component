import { render, fireEvent, screen } from '@testing-library/react'
import PaginationButton from './PaginationButton'

test('onClick', () => {
  const gotoPage = jest.fn()
  render(<PaginationButton pageNumber={1} pageIndex={0} gotoPage={gotoPage} />)
  fireEvent.click(screen.getByTestId('button'))
  expect(gotoPage).toHaveBeenCalledWith(1)
})
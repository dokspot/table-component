import { render, fireEvent, screen } from '@testing-library/react'
import InputPage from './InputPage'

test('onChange', () => {
  const gotoPage = jest.fn()
  render(<InputPage pageCount={5} pageIndex={0} gotoPage={gotoPage} />)
  fireEvent.change(screen.getByTestId('input'), { target: { value: 2 } })
  expect(gotoPage).toHaveBeenCalledWith(1)

  fireEvent.change(screen.getByTestId('input'), { target: { value: null }})
  expect(gotoPage).toHaveBeenCalledWith(0)
})
import { fireEvent, render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Default } from './TableComponent.stories'

test('TableComponent', () => {
  render(<Default {...Default.args} />)
  const row = screen.getAllByRole('row')[1]
  const utils = within(row)
  fireEvent.click(utils.getByTestId('checkbox'))
  expect(screen.queryByText('1 record(s) selected')).toBeInTheDocument()
})

test('TableComponent : useSortBy : desc', () => {
  render(<Default {...Default.args} />)
  fireEvent.click(screen.getByText('Name'))
  const row = screen.getAllByRole('row')[1]
  const utils = within(row)
  expect(utils.queryByText('Item 0')).toBeTruthy()
  expect(utils.queryByText('Item 199')).toBeFalsy()
})

test('TableComponent : useSortBy : asc', () => {
  render(<Default {...Default.args} />)
  fireEvent.click(screen.getByText('Name'))
  fireEvent.click(screen.getByText('Name'))
  const row = screen.getAllByRole('row')[1]
  const utils = within(row)
  expect(utils.queryByText('Item 199')).toBeTruthy()
  expect(utils.queryByText('Item 0')).toBeFalsy()
})
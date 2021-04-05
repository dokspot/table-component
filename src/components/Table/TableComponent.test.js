import { fireEvent, render, screen, within, debug } from '@testing-library/react'
import '@testing-library/jest-dom'
import TableComponent from './TableComponent'
import useData from '../../data/hooks/useData'
import useColumns from '../../data/hooks/useColumns'
import useActions from '../../data/hooks/useActions'


test('TableComponent', () => {
  render(<TableComponent useData={useData} useColumns={useColumns} useActions={useActions} loading={false} />)
  const row = screen.getAllByRole('row')[1]
  const utils = within(row)
  fireEvent.click(utils.getByTestId('checkbox'))
  expect(screen.queryByText('1 record(s) selected')).toBeInTheDocument()
})

test('TableComponent : useSortBy : desc', () => {
  render(<TableComponent useData={useData} useColumns={useColumns} useActions={useActions} loading={false} />)
  fireEvent.click(screen.getByText('Name'))
  const row = screen.getAllByRole('row')[1]
  const utils = within(row)
  expect(utils.queryByText('Item 0')).toBeTruthy()
  expect(utils.queryByText('Item 199')).toBeFalsy()
})

test('TableComponent : useSortBy : asc', () => {
  render(<TableComponent useData={useData} useColumns={useColumns} useActions={useActions} loading={false} />)
  fireEvent.click(screen.getByText('Name'))
  fireEvent.click(screen.getByText('Name'))
  const row = screen.getAllByRole('row')[1]
  const utils = within(row)
  expect(utils.queryByText('Item 199')).toBeTruthy()
  expect(utils.queryByText('Item 0')).toBeFalsy()
})
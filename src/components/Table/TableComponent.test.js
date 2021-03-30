import { fireEvent, render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import TableComponent from './TableComponent'
import useData from '../../data/hooks/useData'
import useColumns from '../../data/hooks/useColumns'
import useActions from '../../data/hooks/useActions'


test('TableComponent', () => {
  render(<TableComponent useData={useData} useColumns={useColumns} useActions={useActions} />)
  const row = screen.getAllByRole('row')[1]
  const utils = within(row)
  fireEvent.click(utils.getByTestId('checkbox'))
  expect(screen.queryByText('1 record(s) selected')).toBeInTheDocument()
})
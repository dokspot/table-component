import { render, fireEvent, screen } from '@testing-library/react'
import SelectPageSize from './SelectPageSize'
import { times } from 'lodash'

test('onChange', () => {
  const rows = times(50, n => n)
  const setPageSize = jest.fn()
  render(<SelectPageSize pageSize={10} rows={rows} setPageSize={setPageSize} />)
  fireEvent.change(screen.getByTestId('input'), { target: { value: '20' } })
  expect(setPageSize).toHaveBeenCalledWith(20)
})
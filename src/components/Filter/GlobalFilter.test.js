import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { Default } from './GlobalFilter.stories'
import 'regenerator-runtime/runtime.js'

test('onChange', async() => {
  const setGlobalFilter = jest.fn()
  render(<Default setGlobalFilter={setGlobalFilter} {...Default.args} />)
  fireEvent.change(screen.getByTestId('input'), { target: { value: 'Hello' } })
  await waitFor(() => expect(setGlobalFilter).toHaveBeenCalledWith('Hello'))

  fireEvent.change(screen.getByTestId('input'), { target: { value: '' } })
  await waitFor(() => expect(setGlobalFilter).toHaveBeenCalledWith(undefined))
})

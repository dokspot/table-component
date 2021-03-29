import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { Default } from './DefaultFilter.stories'

test('onChange', async() => {
  const setFilter = jest.fn()
  const args = Default.args
  args.column.setFilter = setFilter
  render(<Default {...args} />)
  fireEvent.change(screen.getByTestId('input'), { target: { value: 'Hello' } })
  await waitFor(() => expect(setFilter).toHaveBeenCalledWith('Hello'))

  fireEvent.change(screen.getByTestId('input'), { target: { value: '' } })
  await waitFor(() => expect(setFilter).toHaveBeenCalledWith(undefined))
})

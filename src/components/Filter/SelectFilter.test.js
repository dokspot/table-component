import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { Default } from './SelectFilter.stories'

test('onChange', async() => {
  const setFilter = jest.fn()
  const args = Default.args
  args.column.setFilter = setFilter
  render(<Default {...args} />)
  fireEvent.change(screen.getByTestId('input'), { target: { value: 'type2' } })
  await waitFor(() => expect(setFilter).toHaveBeenCalledWith('type2'))

  fireEvent.change(screen.getByTestId('input'), { target: { value: '' } })
  await waitFor(() => expect(setFilter).toHaveBeenCalledWith(undefined))
})

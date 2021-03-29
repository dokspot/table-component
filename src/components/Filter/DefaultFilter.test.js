import { render, fireEvent, screen } from '@testing-library/react'
import { Default } from './DefaultFilter.stories'

test('onChange', () => {
  const setFilter = jest.fn()
  const args = Default.args
  args.column.setFilter = setFilter
  render(<Default {...args} />)
  fireEvent.change(screen.getByTestId('input'), { target: { value: 'Hello' } })
  expect(setFilter).toHaveBeenCalledWith('Hello')
})

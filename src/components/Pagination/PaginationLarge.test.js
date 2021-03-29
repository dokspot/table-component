import { render, fireEvent, screen } from '@testing-library/react'
import { Default } from './PaginationLarge.stories'

test('onClick - previousPage', () => {
  const previousPage = jest.fn()
  const nextPage = jest.fn()
  render(
    <Default
      {...Default.args}
      previousPage={previousPage}
      nextPage={nextPage}
    />
  )
  fireEvent.click(screen.getByTestId('previousPage'))
  expect(previousPage).toHaveBeenCalledTimes(1)

  fireEvent.click(screen.getByTestId('nextPage'))
  expect(nextPage).toHaveBeenCalledTimes(1)
})
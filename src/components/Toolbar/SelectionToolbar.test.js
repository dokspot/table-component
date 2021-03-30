import React, { useMemo } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SelectionToolbar, { SelectionButton } from './SelectionToolbar'

function useActions() {
  const actions = useMemo(() => [
    { name: 'Action 1', action: jest.fn(), defaults: {} },
    { name: 'Action 2', action: jest.fn(), defaults: {} },
    { name: 'Action 3', action: jest.fn(), defaults: {} },
  ])
  return actions
}

test('SelectionToolbar : No Actions', () => {
  render(
    <SelectionToolbar
      selectedFlatRows={[]}
      useActions={jest.fn()}
    />
  )
  expect(screen.queryAllByTestId('action-btn').length).toBe(0)
})

test('SelectionToolbar : Actions', () => {

  render(
    <SelectionToolbar
      selectedFlatRows={[1, 2, 3, 4]}
      useActions={useActions}
    />
  )
  expect(screen.getByTestId('selection-count')).toHaveTextContent('4 Selected Items')
  expect(screen.queryAllByTestId('action-btn').length).toBe(3)
})

test('SelectionButton', () => {
  const action = jest.fn()
  const item = { name: 'Action', action, defaults: {} }
  render(<SelectionButton item={item} selectedFlatRows={[1, 2, 3, 4]} />)
  expect(screen.getByTestId('action-btn')).toHaveTextContent('Action')
  fireEvent.click(screen.getByTestId('action-btn'))
  expect(action).toHaveBeenCalled()
})

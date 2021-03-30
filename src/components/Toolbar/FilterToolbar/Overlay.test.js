import React from 'react'
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved, within } from '@testing-library/react'
import Overlay from './Overlay'
import SelectFilter from '../../Filter/SelectFilter'
import '@testing-library/jest-dom'

test('FilterOverlay', async() => {

  const headerGroups = [
    {
      headers: [
        { id: 'selection', canFilter: false },
        { Header: 'NoFilter', disableFilter: true, canFilter: false },
        { Header: 'Filter1', filter: 'includes', Filter: SelectFilter, getHeaderProps: jest.fn(), render: jest.fn(), canFilter: true },
        { Header: 'Filter2', filter: 'includes', Filter: SelectFilter, getHeaderProps: jest.fn(), render: jest.fn(), canFilter: true }
      ]
    }
  ]

  render(<Overlay headerGroups={headerGroups} filters={[]} />)
  expect(screen.getByText('Filters')).toBeVisible()
  fireEvent.click(screen.getByTestId('btn'))
  await waitFor(() => expect(screen.getByTestId('popover')).toBeInTheDocument())
  const utils = within(screen.getByTestId('popover'))
  // screen.debug(screen.getByTestId('filter-popover'))
  expect(utils.queryAllByTestId('row').length).toBe(2)
  fireEvent.click(screen.getByTestId('btn'))
  await waitForElementToBeRemoved(() => screen.queryAllByTestId('popover'))
})

test('FilterOverlay : Filters > 0', () => {
  render(<Overlay headerGroups={[]} filters={[1]} />)
  expect(screen.getByTestId('btn')).toHaveClass('btn-outline-warning')
})
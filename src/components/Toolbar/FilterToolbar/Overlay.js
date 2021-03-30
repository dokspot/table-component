/* eslint-disable react/jsx-key */
import { Button, OverlayTrigger, Popover, Table } from 'react-bootstrap'
import { FilterList } from '@styled-icons/material/FilterList'
import { filter, flatten, map } from 'lodash'
import PropTypes from 'prop-types'

function FilterRow({ row }) {
  return (
    <tr data-testid='row' {...row.getHeaderProps()}>
      <td className='align-middle'>{row.render('Header')}</td>
      <td className='align-middle'>{row.render('Filter')}</td>
    </tr>
  )
}

export default function Overlay({ headerGroups, filters }) {
  const rows = filter(flatten(map(headerGroups, 'headers')), (column) => {
    return (column.id !== 'selection') && column.canFilter
  })

  const popover = (
    <Popover data-testid='popover'>
      <Popover.Title>Filters</Popover.Title>
      <Popover.Content>
        <Table borderless>
          <tbody>
            {rows.map((row, key) => <FilterRow key={key} row={row} />)}
          </tbody>
        </Table>
      </Popover.Content>
    </Popover>
  )

  return (
    <OverlayTrigger trigger='click' placement='right' overlay={popover} rootClose>
      <Button 
        variant={ filters.length === 0 ? 'link' : 'outline-warning' }
        size='sm'
        style={{ lineHeight: '20px' }}
        data-testid='btn'>
        <span className='mr-1' style={{ verticalAlign: 'middle' }}>Filters</span>
        <FilterList size={20} />
      </Button>
    </OverlayTrigger>
  )
}

Overlay.propTypes = {
  headerGroups: PropTypes.array,
  filters: PropTypes.array
}
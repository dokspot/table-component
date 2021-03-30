/* eslint-disable react/display-name */
import IndeterminateCheckbox from '../Utils/IndeterminateCheckbox'
import Cell from '../Cell/Cell'

export default function useSelectColumn(hooks) {
  hooks.visibleColumns.push(columns => [
    // Let's make a column for selection
    {
      id: 'selection',
      // The header can use the table's getToggleAllRowsSelectedProps method
      // to render a checkbox
      Header: ({ getToggleAllPageRowsSelectedProps }) => (<IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }) => (
        <Cell>
          <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
        </Cell>
      )
    },
    ...columns
  ])
  return hooks
}
import { Table } from 'react-bootstrap'
import Cell from '../Cell/Cell'
import Toolbar from '../Toolbar/Toolbar'
import PropTypes from 'prop-types'
import { useTable } from 'react-table'
import { times } from 'lodash'

function LoadingHeader() {
  return (
    <tr>
      {times(4, n => <th key={n}><span className='glow-text'>Loading</span></th>)}
    </tr>
  )
}

function LoadingRow() {
  return (
    <tr>
      {times(4, n => <Cell key={n} loading={true} />)}
    </tr>
  )
}

export default function TableComponent({ loading, useData, useColumns }) {
  const tableInstance = useTable({ data: useData(), columns: useColumns() })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows
  } = tableInstance

  if (loading) {
    return (
      <>
        <Toolbar></Toolbar>
        <Table>
          <thead><LoadingHeader /></thead>
          <tbody>{times(10, n => <LoadingRow key={n} />)}</tbody>
        </Table>
      </>
    )
  }
  console.log(selectedFlatRows)

  return (
    <>
      <Toolbar></Toolbar>
      <Table hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              { headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, n) => cell.render('Cell', { key: n }))}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

TableComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  useData: PropTypes.func.isRequired,
  useColumns: PropTypes.func.isRequired,
  useActions: PropTypes.array
}
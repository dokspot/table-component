/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from 'react-bootstrap'
import Cell from '../Cell/Cell'
import Pagination from '../Pagination/Pagination'
import Toolbar from '../Toolbar/Toolbar'
import FilterToolbar from '../Toolbar/FilterToolbar/FilterToolbar'
import SelectionToolbar from '../Toolbar/SelectionToolbar'
import PropTypes from 'prop-types'
import { useTable, useFilters, useGlobalFilter, usePagination, useRowSelect, useSortBy } from 'react-table'
import useSelectionColumn from '../Hooks/useSelectionColumn'
import { times } from 'lodash'
import { ArrowDropUp } from '@styled-icons/material/ArrowDropUp'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'

function LoadingHeader() {
  return (
    <tr>
      {times(4, (n) => <th key={n}><span className='glow-text'>Loading</span></th>)}
    </tr>
  )
}

function LoadingRow() {
  return (
    <tr>
      {times(4, (n) => <Cell key={n} loading={true} />)}
    </tr>
  )
}

export default function TableComponent({ loading, useData, useColumns, useActions }) {
  const tableInstance = useTable(
    { data: useData(), columns: useColumns() },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => useSelectionColumn(hooks)
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    selectedFlatRows,
    state: { pageIndex, pageSize, filters, globalFilter }
  } = tableInstance

  if (loading) {
    return (
      <>
        <Toolbar></Toolbar>
        <Table>
          <thead><LoadingHeader /></thead>
          <tbody>{times(10, (n) => <LoadingRow key={n} />)}</tbody>
        </Table>
      </>
    )
  }

  return (
    <>
      <Toolbar>
        {selectedFlatRows.length > 0
          ? <>
            <SelectionToolbar
              selectedFlatRows={selectedFlatRows}
              useActions={useActions}
            />
          </>
          : <>
            <FilterToolbar
              headerGroups={headerGroups}
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
              filters={filters}
            />
            <Pagination
              rows={rows}
              canNextPage={canNextPage}
              canPreviousPage={canPreviousPage}
              gotoPage={gotoPage}
              nextPage={nextPage}
              pageCount={pageCount}
              pageIndex={pageIndex}
              pageSize={pageSize}
              setPageSize={setPageSize}
              previousPage={previousPage}
            />
          </>
        }
      </Toolbar>
      <Table hover responsive {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              { headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <ArrowDropDown size={12} />
                        : <ArrowDropUp size={12} />
                      : ' '
                    }
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
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
  useActions: PropTypes.func
}
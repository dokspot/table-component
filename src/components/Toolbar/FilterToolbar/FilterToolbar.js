import React from 'react'
import Overlay from './Overlay'
import GlobalFilter from '../../Filter/GlobalFilter'
import PropTypes from 'prop-types'

export default function FilterToolbar({
  headerGroups,
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  filters
}) {
  return (
    <div className='d-flex justify-content-start align-items-center' style={{ height: '100%' }}>
      <Overlay headerGroups={headerGroups} filters={filters} />
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  )
}

FilterToolbar.propTypes = {
  headerGroups: PropTypes.array,
  preGlobalFilteredRows: PropTypes.array,
  globalFilter: PropTypes.string,
  setGlobalFilter: PropTypes.func,
  filters: PropTypes.array
}
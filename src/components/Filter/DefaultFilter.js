import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import 'regenerator-runtime/runtime.js'

export default function DefaultFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  const count = preFilteredRows.length
  const [value, setValue] = useState(filterValue)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 200)

  return (
    <Form.Control
      value={value || ''}
      onChange={e => {
        setValue(e.target.value)
        onChange(e.target.value) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
      data-testid='input'
    />
  )
}

DefaultFilter.propTypes = {
  column: PropTypes.shape({
    filterValue: PropTypes.string,
    preFilteredRows: PropTypes.array.isRequired,
    setFilter: PropTypes.func.isRequired
  })
}
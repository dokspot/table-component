import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function DefaultFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  const count = preFilteredRows.length

  return (
    <Form.Control
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value)
        // setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
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
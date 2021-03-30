import { useMemo, useState } from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function SelectFilter({
  column: { filterValue, setFilter, preFilteredRows, id }
}) {
  const [value, setValue] = useState(filterValue)

  // if (filterValue === undefined) { filterValue = '' }
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <Form.Control
      as='select'
      value={value}
      data-testid='input'
      onChange={e => {
        setValue(e.target.value || undefined)
        setFilter(e.target.value || undefined)
      }}
    >
      <option value=''>All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </Form.Control>
  )
}

SelectFilter.propTypes = {
  column: PropTypes.shape({
    filterValue: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
    preFilteredRows: PropTypes.arrayOf(PropTypes.shape({
      values: PropTypes.object
    })).isRequired,
    id: PropTypes.string.isRequired
  })
}
import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { Form, InputGroup } from 'react-bootstrap'
import { Search } from '@styled-icons/material/Search'
import PropTypes from 'prop-types'

export default function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)
  return (
    <InputGroup className='align-middle ml-2' size='sm' style={{ width: 'initial' }}>
      <InputGroup.Prepend>
        <InputGroup.Text><Search size={16} /></InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`${count} records...`}
        data-testid='input'
      />
    </InputGroup>
  )
}

GlobalFilter.propTypes = {
  globalFilter: PropTypes.string,
  preGlobalFilteredRows: PropTypes.array.isRequired,
  setGlobalFilter: PropTypes.func.isRequired
}
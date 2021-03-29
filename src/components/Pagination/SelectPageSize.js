import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function SelectPageSize({
  rows,
  setPageSize,
  pageSize,
}) {
  return (
    <>
      <span className='mr-1'>Show:</span>
      <Form.Control
        as='select'
        size='sm'
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
        style={{ width: '56px', display: 'inline' }}
        data-testid='input'
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>{pageSize}</option>
        ))}
        <option value={rows.length}>All</option>
      </Form.Control>
    </>
  )
}

SelectPageSize.protoTypes = {
  rows: PropTypes.array.isRequired,
  setPageSize: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
}
import Cell from './Cell'
import PropTypes from 'prop-types'

export default function TextCell({ loading, text }) {

  return (
    <Cell loading={loading}>
      <span>{text}</span>
    </Cell>
  )
}

TextCell.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
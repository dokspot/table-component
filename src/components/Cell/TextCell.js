import Cell from './Cell'
import PropTypes from 'prop-types'

export default function TextCell({ text }) {
  return (
    <Cell>
      <span>{text}</span>
    </Cell>
  )
}

TextCell.propTypes ={
  text: PropTypes.string.isRequired
}
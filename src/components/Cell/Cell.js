import PropTypes from 'prop-types'

export default function Cell({ loading, children = null }) {
  if (loading) { return (<td className='align-middle'><span className='glow-text'>Loading</span></td>) }
  return (<td className='align-middle'>{children}</td>)
}

Cell.propTypes ={
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node
}
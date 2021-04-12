import PropTypes from 'prop-types'
import Glow from '../Utils/Glow'

export default function Cell({ loading, children = null }) {
  if (loading) { return (<td className='align-middle'><Glow>Loading</Glow></td>) }
  return (<td className='align-middle'>{children}</td>)
}

Cell.propTypes ={
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node
}
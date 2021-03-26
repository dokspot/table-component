import PropTypes from 'prop-types'

export default function Toolbar({ children }) {
  return (
    <div className='d-flex justify-content-between toolbar'>
      { children }
    </div>
  )
}

Toolbar.propTypes = {
  children: PropTypes.node
}
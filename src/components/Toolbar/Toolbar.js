import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledToolbar = styled.div`
  line-height: 56px;
  font-size: 0.875rem;
  height: 56px;
`

export default function Toolbar({ children }) {
  return (
    <StyledToolbar className='d-flex justify-content-between'>
      { children }
    </StyledToolbar>
  )
}

Toolbar.propTypes = {
  children: PropTypes.node
}
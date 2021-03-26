import Cell from './Cell'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function TooltipCell({ loading, placement, label, children }) {
  const tooltip = <Tooltip>{children}</Tooltip>

  return (
    <Cell loading={loading}>
      <OverlayTrigger placement={placement} overlay={tooltip}>{label}</OverlayTrigger>
    </Cell>
  )
}

TooltipCell.propTypes ={
  loading: PropTypes.bool.isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}
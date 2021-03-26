import Cell from "./Cell"
import { Badge } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function BadgeCell({ loading, text, badges }) {

  return (
    <Cell loading={loading}>
      <div className='d-flex align-items-center'>
        <span>{text}</span>
        {badges.map((badge, key) => (
          <Badge
            pill
            key={key}
            variant={badge.variant}
            className='ml-1'
          >{badge.text}</Badge>
        ))}
      </div>
    </Cell>
  )
}

BadgeCell.propTypes ={
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'])
  }))
}
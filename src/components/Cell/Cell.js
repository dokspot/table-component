import PropTypes from 'prop-types';

export default function Cell({ children }) {
  return (<td className='align-middle'>{children}</td>)
}

Cell.propTypes ={
  children: PropTypes.element.isRequired
}
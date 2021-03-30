import { ButtonGroup, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export function SelectionButton({ item, selectedFlatRows }) {
  return (
    <Button
      data-testid='action-btn'
      variant='link'
      className='text-white'
      onClick={() => item.action({ selectedFlatRows, defaults: item.defaults })}
    // disabled={() => !item.conditions(selectedFlatRows)}
    >{item.name}</Button>
  )
}

export default function SelectionToolbar({ selectedFlatRows, useActions }) {
  const actions = useActions() || []
  return (
    <div className='bg-dark text-white pl-2 pr-1 selected-col w-100 rounded' data-testid='selection-toolbar'>
      <span data-testid='selection-count'>{Object.keys(selectedFlatRows).length} Selected Items</span>
      <div className='float-right'>
        <ButtonGroup size='sm' style={{ top: '-1px' }}>
          {actions.map((item, key) => (<SelectionButton key={key} item={item} selectedFlatRows={selectedFlatRows} />))}
        </ButtonGroup>
      </div>
    </div>
  )
}

SelectionToolbar.propTypes = {
  selectedFlatRows: PropTypes.array,
  useActions: PropTypes.func
}
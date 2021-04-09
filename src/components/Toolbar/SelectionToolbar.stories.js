/* eslint-disable import/no-anonymous-default-export */
import SelectionToolbar from './SelectionToolbar'
import { actions } from '@storybook/addon-actions'

const events = actions({ action: 'action' })

export default {
  component: SelectionToolbar,
  title: 'Toolbar/SelectionToolbar'
}

const Template = (args) => <SelectionToolbar {...args} />

export const Default = Template.bind({})
Default.args = {
  selectedFlatRows: [1,2,3],
  useActions: () => { return [{
    name: 'Sum',
    defaults: {},
    ...events
  }] }
}
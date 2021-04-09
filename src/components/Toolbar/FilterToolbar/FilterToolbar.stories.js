/* eslint-disable import/no-anonymous-default-export */
import FilterToolbar from './FilterToolbar'

export default {
  component: FilterToolbar,
  title: 'Toolbar/FilterToolbar/FilterToolbar',
  argTypes: {
    setGlobalFilter: { action: 'setGlobalFilter' }
  }
}


const Template = (args) => <FilterToolbar {...args} />

export const Default = Template.bind({})
Default.args = {
  headerGroups: [],
  preGlobalFilteredRows: [],
  globalFilter: '',
  filters: []
}
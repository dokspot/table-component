/* eslint-disable import/no-anonymous-default-export */
import GlobalFilter from './GlobalFilter'

export default {
  component: GlobalFilter,
  title: 'Filter/GlobalFilter',
  argTypes: { setGlobalFilter: { action: 'setGlobalFilter' } }
}

const Template = args => <GlobalFilter {...args} />

export const Default = Template.bind({})
Default.args = {
  preGlobalFilteredRows: [1,2,3,4],
  globalFilter: undefined
}
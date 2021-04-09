/* eslint-disable import/no-anonymous-default-export */
import SelectPageSize from './SelectPageSize'
import { times } from 'lodash'

export default {
  component: SelectPageSize,
  title: 'Pagination/SelectPageSize',
  argTypes: { setPageSize: { action: 'setPageSize' } }
}

const Template = (args) => <SelectPageSize {...args} />

export const Default = Template.bind({})
Default.args = {
  rows: times(200, n => n),
  pageSize: 10,
}
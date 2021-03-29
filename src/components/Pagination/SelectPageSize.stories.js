/* eslint-disable import/no-anonymous-default-export */
import SelectPageSize from './SelectPageSize'
import { times } from 'lodash'

export default {
  component: SelectPageSize,
  title: 'Pagination/SelectPageSize',
}

const Template = args => <SelectPageSize {...args} />

export const Default = Template.bind({})
Default.args = {
  rows: times(200, n => n),
  setPageSize: () => {},
  pageSize: 10,
}
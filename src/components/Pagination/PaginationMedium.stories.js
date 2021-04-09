/* eslint-disable import/no-anonymous-default-export */
import PaginationMedium from './PaginationMedium'

export default {
  component: PaginationMedium,
  title: 'Pagination/PaginationMedium',
  argTypes: { gotoPage: { action: 'gotoPage' } }
}

const Template = (args) => <PaginationMedium {...args} />

export const Default = Template.bind({})
Default.args = {
  pageCount: 5,
  pageIndex: 0,
}
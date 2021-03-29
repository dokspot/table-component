/* eslint-disable import/no-anonymous-default-export */
import PaginationMedium from './PaginationMedium'

export default {
  component: PaginationMedium,
  title: 'Pagination/PaginationMedium'
}

const Template = args => <PaginationMedium {...args} />

export const Default = Template.bind({})
Default.args = {
  gotoPage: () => {},
  pageCount: 5,
  pageIndex: 0,
}
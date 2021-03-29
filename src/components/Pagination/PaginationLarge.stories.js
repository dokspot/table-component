/* eslint-disable import/no-anonymous-default-export */
import PaginationLarge from './PaginationLarge'

export default {
  component: PaginationLarge,
  title: 'Pagination/PaginationLarge'
}

const Template = args => <PaginationLarge {...args} />

export const Default = Template.bind({})
Default.args = {
  gotoPage: () => {},
  previousPage: () => {},
  nextPage: () => {},
  canPreviousPage: false,
  canNextPage: true,
  pageCount: 20,
  pageIndex: 0,
}
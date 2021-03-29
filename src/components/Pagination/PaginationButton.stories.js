/* eslint-disable import/no-anonymous-default-export */
import PaginationButton from './PaginationButton'

export default {
  component: PaginationButton,
  title: 'Pagination/PaginationButton'
}

const Template = args => <PaginationButton {...args} />

export const Default = Template.bind({})
Default.args = {
  gotoPage: () => {},
  pageNumber: 0,
  pageIndex: 5,
}

export const Primary = Template.bind({})
Primary.args = {
  gotoPage: () => {},
  pageNumber: 0,
  pageIndex: 0,
}
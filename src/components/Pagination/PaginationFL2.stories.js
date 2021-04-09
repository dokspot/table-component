/* eslint-disable import/no-anonymous-default-export */
import PaginationFL2 from './PaginationFL2'

export default {
  component: PaginationFL2,
  title: 'Pagination/PaginationFL2',
  argTypes: { gotoPage: { action: 'gotoPage' } }
}

const Template = (args) => <PaginationFL2 {...args} />

export const Default = Template.bind({})
Default.args = {
  pageCount: 15,
  pageIndex: 0,
}
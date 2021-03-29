/* eslint-disable import/no-anonymous-default-export */
import PaginationAlt from './PaginationAlt'

export default {
  component: PaginationAlt,
  title: 'Pagination/PaginationAlt'
}

const Template = args => <PaginationAlt {...args} />

export const Default = Template.bind({})
Default.args = {
  gotoPage: () => {},
  pageCount: 15,
  pageIndex: 9,
}
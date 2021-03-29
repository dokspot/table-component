/* eslint-disable import/no-anonymous-default-export */
import PaginationAlt from './PaginationAlt'

export default {
  component: PaginationAlt,
  title: 'Pagination/PaginationAlt',
  argTypes: { gotoPage: { action: 'gotoPage' } }
}

const Template = args => <PaginationAlt {...args} />

export const Default = Template.bind({})
Default.args = {
  pageCount: 15,
  pageIndex: 9,
}
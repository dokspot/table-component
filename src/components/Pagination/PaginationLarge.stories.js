/* eslint-disable import/no-anonymous-default-export */
import PaginationLarge from './PaginationLarge'

export default {
  component: PaginationLarge,
  title: 'Pagination/PaginationLarge',
  argTypes: { 
    gotoPage: { action: 'gotoPage' },
    previousPage: { action: 'previousPage' },
    nextPage: { action: 'nextPage' }
  }
}

const Template = (args) => <PaginationLarge {...args} />

export const Default = Template.bind({})
Default.args = {
  canPreviousPage: true,
  canNextPage: true,
  pageCount: 20,
  pageIndex: 10,
}
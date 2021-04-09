/* eslint-disable import/no-anonymous-default-export */
import Pagination from './Pagination'
import { times } from 'lodash'

export default {
  component: Pagination,
  title: 'Pagination/Pagination',
  argTypes: { 
    gotoPage: { action: 'gotoPage' },
    previousPage: { action: 'previousPage' },
    nextPage: { action: 'nextPage' },
    setPageSize: { action: 'setPageSize' }
  }
}

const Template = (args) => <Pagination {...args} />

export const Medium = Template.bind({})
Medium.args = {
  rows: times(50, (n) => n),
  canPreviousPage: false,
  canNextPage: true,
  pageCount: 5,
  pageIndex: 0,
  pageSize: 10,
}

export const Large = Template.bind({})
Large.args = {
  rows: times(200, (n) => n),
  canPreviousPage: false,
  canNextPage: true,
  pageCount: 20,
  pageIndex: 0,
  pageSize: 10,
}
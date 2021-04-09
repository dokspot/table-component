/* eslint-disable import/no-anonymous-default-export */
import InputPage from './InputPage'

export default {
  component: InputPage,
  title: 'Pagination/InputPage',
  argTypes: {  gotoPage: { action: 'gotoPage' } }
}

const Template = (args) => <InputPage {...args} />

export const Default = Template.bind({})
Default.args = {
  pageCount: 5,
  pageIndex: 0,
}
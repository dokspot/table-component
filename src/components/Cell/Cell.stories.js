/* eslint-disable import/no-anonymous-default-export */
import Cell from './Cell'

export default {
  component: Cell,
  title: 'Cell'
}

const Template = args => <Cell {...args} />

export const Default = Template.bind({})
Default.args = {
  loading: false,
  children: <></>
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  children: <></>
}
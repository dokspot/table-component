/* eslint-disable import/no-anonymous-default-export */
import Cell from './Cell'

export default {
  component: Cell,
  title: 'Cell'
}

const Template = args => <Cell {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <></>
}
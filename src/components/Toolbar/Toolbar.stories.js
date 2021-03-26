/* eslint-disable import/no-anonymous-default-export */
import Toolbar from './Toolbar'

export default {
  component: Toolbar,
  title: 'Toolbar'
}

const Template = args => <Toolbar {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div>Children</div>
}
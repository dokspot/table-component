/* eslint-disable import/no-anonymous-default-export */
import TextCell from './TextCell'

export default {
  component: TextCell,
  title: 'TextCell'
}

const Template = args => <TextCell {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hello World',
  loading: false
}
/* eslint-disable import/no-anonymous-default-export */
import TooltipCell from './TooltipCell'

export default {
  component: TooltipCell,
  title: 'TooltipCell'
}

const Template = args => <TooltipCell {...args} />

export const Default = Template.bind({})
Default.args = {
  loading: false,
  placement: 'bottom',
  label: <div>Label</div>,
  children: <div>Children</div>
}
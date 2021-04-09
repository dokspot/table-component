/* eslint-disable import/no-anonymous-default-export */
import Overlay from './Overlay'

export default {
  component: Overlay,
  title: 'Toolbar/FilterToolbar/Overlay',
}


const Template = (args) => <Overlay {...args} />

export const Default = Template.bind({})
Default.args = {
  headerGroups: [],
  filters: []
}
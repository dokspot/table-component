/* eslint-disable import/no-anonymous-default-export */
// import { renderHook } from '@testing-library/react-hooks'
// import useColumns from '../../../data/hooks/useColumns'
// import useData from '../../../data/hooks/useData'
// import { makeRenderer } from 'react-table'
import Overlay from './Overlay'

export default {
  component: Overlay,
  title: 'Toolbar/FilterToolbar/Overlay',
}


const Template = args => <Overlay {...args} />

export const Default = Template.bind({})
Default.args = {
  headerGroups: [],
  filters: []
}
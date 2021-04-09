/* eslint-disable import/no-anonymous-default-export */
import TableComponent from './TableComponent'
import useData from '../../data/hooks/useData'
import useColumns from '../../data/hooks/useColumns'
import useActions from '../../data/hooks/useActions'

export default {
  component: TableComponent,
  title: 'TableComponent'
}

const Template = (args) => <TableComponent {...args} />

export const Default = Template.bind({})
Default.args = {
  loading: false,
  useData,
  useColumns,
  useActions
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  useData,
  useColumns,
  useActions
}
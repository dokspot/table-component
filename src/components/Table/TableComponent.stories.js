/* eslint-disable import/no-anonymous-default-export */
import TableComponent from './TableComponent'
import useData from '../../test/hooks/useData'
import useColumns from '../../test/hooks/useColumns'
import useActions from '../../test/hooks/useActions'

export default {
  component: TableComponent,
  title: 'TableComponent'
}

const Template = (args) => <TableComponent {...args} data={useData()} columns={useColumns()} actions={useActions()} />

export const Default = Template.bind({})
Default.args = {
  loading: false
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true
}
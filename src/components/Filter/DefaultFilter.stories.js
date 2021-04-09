/* eslint-disable import/no-anonymous-default-export */
import DefaultFilter from './DefaultFilter'
import { actions } from '@storybook/addon-actions'

export default {
  component: DefaultFilter,
  title: 'Filter/DefaultFilter',
}

const events = actions({ setFilter: 'setFilter' })

const Template = (args) => <DefaultFilter {...args} />

export const Default = Template.bind({})
Default.args = {
  column: {
    filterValue: undefined,
    preFilteredRows: [1,2,3,4],
    ...events
  }
}
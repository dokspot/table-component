/* eslint-disable import/no-anonymous-default-export */
import SelectFilter from './SelectFilter'
import { actions } from '@storybook/addon-actions'

export default {
  component: SelectFilter,
  title: 'Filter/SelectFilter',
}

const events = actions({ setFilter: 'setFilter' })

const Template = (args) => <SelectFilter {...args} />

export const Default = Template.bind({})
Default.args = {
  column: {
    filterValue: undefined,
    preFilteredRows: [
      { values: { property: 'type1' } },
      { values: { property: 'type1' } },
      { values: { property: 'type2' } },
      { values: { property: 'type3' } },
    ],
    ...events,
    id: 'property'
  }
}
/* eslint-disable import/no-anonymous-default-export */
import Toolbar from './Toolbar'
import FilterToolbar from './FilterToolbar/FilterToolbar'
import SelectionToolbar from './SelectionToolbar'
import Pagination from '../Pagination/Pagination'
import * as FilterToolbarStories from './FilterToolbar/FilterToolbar.stories'
import * as SelectionToolbarStories from './SelectionToolbar.stories'
import * as PaginationStories from '../Pagination/Pagination.stories'

export default {
  component: Toolbar,
  title: 'Toolbar'
}

const Template = args => <Toolbar {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div>Children</div>
}

export const Filter = Template.bind({})
Filter.args = {
  children: <FilterToolbar {...FilterToolbarStories.Default.args} />
}

export const Selection = Template.bind({})
Selection.args = {
  children: <SelectionToolbar {...SelectionToolbarStories.Default.args} />
}

const Comp = () => (
  <>
    <FilterToolbar {...FilterToolbarStories.Default.args} />
    <Pagination {...PaginationStories.Medium.args} />
  </>
)

export const FilterNPagination = Template.bind({})
FilterNPagination.args = {
  children: <Comp />
}
/* eslint-disable import/no-anonymous-default-export */
import BadgeCell from './BadgeCell'

export default {
  component: BadgeCell,
  title: 'Cell/BadgeCell'
}

const Template = args => <BadgeCell {...args} />

export const Default = Template.bind({})
Default.args = {
  loading: false,
  text: 'Badge Cell',
  badges: [
    { text: 'Primary', variant: 'primary' },
    { text: 'Secondary', variant: 'secondary' },
    { text: 'Success', variant: 'success' },
    { text: 'Danger', variant: 'danger' },
    { text: 'Warning', variant: 'warning' },
    { text: 'Info', variant: 'info' },
    { text: 'Light', variant: 'light' },
    { text: 'Dark', variant: 'dark' }
  ]
}
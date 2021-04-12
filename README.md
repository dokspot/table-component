[![Build](https://github.com/dokspot/table-component/actions/workflows/build.yml/badge.svg)](https://github.com/dokspot/table-component/actions/workflows/build.yml)
[![Test](https://github.com/dokspot/table-component/actions/workflows/test.yml/badge.svg)](https://github.com/dokspot/table-component/actions/workflows/test.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/88d95a384ab74e77bbc8f1d1b33a09b5)](https://www.codacy.com/gh/dokspot/table-component/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dokspot/table-component&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/88d95a384ab74e77bbc8f1d1b33a09b5)](https://www.codacy.com/gh/dokspot/table-component/dashboard?utm_source=github.com&utm_medium=referral&utm_content=dokspot/table-component&utm_campaign=Badge_Coverage)

# @dokspot/table-component

Based on [react-table](https://react-table.tanstack.com/) and [react-bootstrap](https://react-bootstrap.netlify.app/), this component generates a standard table. The component can be explored through its [storybook](https://dokspot.github.io/table-component/?path=/story/tablecomponent--default).

## Installation

`yarn add @dokspot/table-component`

## Getting started

We leverage [react-table](https://react-table.tanstack.com/) package and therefore follow the similar input, using `useMemo`.

To create a table we will need three elements:

- Data via `useData`
- Columns via `useColumns`
- Actions via `useActions`

The three elements should implement `useMemo` from react. We suggest organising the following structure for your table (example is a products table):

```
- /products
  - /hooks
    - useData.js
    - useColumns.js
    - useActions.js
  - Index.js
```

### Skeleton files

#### useData
```javascript
// useData.js
import { useMemo } from 'react'

export default function useData() {
  return useMemo(() => [
    {
      name: 'Product A',
      state: 'public'
    },
    {
      name: 'Product B',
      state: 'private'
    }
  }), [])
}
```

#### useColumns
```javascript
// useColumns.js
import { useMemo } from 'react'
import { TextCell } from '@dokspot/table-component'

export default function useColumns() {
  return useMemo(() => [
    {
      Header: 'Name',
      Cell: cellInfo => <TextCell loading={false} text={cellInfo.value} />,
      accessor: 'name',
      Filter: DefaultFilter,
      canSort: true
    },
    {
      Header: 'State',
      Cell: cellInfo => <TextCell loading={false} text={cellInfo.value} />,
      accessor: 'state',
      Filter: SelectFilter,
      filter: 'includes',
    },
  }), [])
}
```

#### useActions

```javascript
// useActions.js
import { useMemo } from "react"

export default function useActions() {
  return useMemo(() => [
    {
      name: 'Action 1',
      action: () => {},
      defaults: {}
    },
    {
      name: 'Action 2',
      action: () => {},
      defaults: {}
    }
  ], [])
}
```

#### Index

```javascript
// Index.js
import { TableComponent } from '@dokspot/table-component'
import useData from './hooks/useData'
import useColumns from './hooks/useColumns'
import useActions from './hooks/useActions'

export default function Index() {
  return (
    <div className='style-me'>
      <TableComponent useData={useData} useColumns={useColumns} useActions={useActions} />
    </div>
  )
}
```
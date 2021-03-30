import { useMemo } from 'react'
import TextCell from '../../components/Cell/TextCell'
import TooltipCell from '../../components/Cell/TooltipCell'
// import DefaultFilter from '../../components/Filter/DefaultFilter'
// import SelectFilter from '../../components/Filter/SelectFilter'

export default function useColumns() {
  return useMemo(() => [
    {
      Header: 'Name',
      Cell: cellInfo => <TextCell loading={false} text={cellInfo.value} />,
      accessor: 'name',
      // Filter: DefaultFilter
    },
    {
      Header: 'State',
      Cell: cellInfo => <TextCell loading={false} text={cellInfo.value} />,
      accessor: 'state',
      // Filter: SelectFilter
    },
    {
      Header: 'Tooltip',
      Cell: cellInfo => (
        <TooltipCell
          loading={false}
          placement='right'
          label={<div>{cellInfo.value}</div>}
        >
          <div>{cellInfo.value}</div>
        </TooltipCell>
      ),
      accessor: 'count'
    },
  ], [])
}
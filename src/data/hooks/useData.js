import { useMemo } from 'react';
import { times } from 'lodash'

export default function useData() {
  return useMemo(() => times(200, n => { 
    return {
      name: `Item ${n}`,
      state: 'public',
      count: n
    }
  }), [])
}
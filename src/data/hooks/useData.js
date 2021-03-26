import { useMemo } from 'react';

export default function useData() {
  return useMemo(() => [
    { name: 'Item 1', state: 'public', count: 1 },
    { name: 'Item 2', state: 'private', count: 2 },
    { name: 'Item 3', state: 'public', count: 3 },
  ], [])
}
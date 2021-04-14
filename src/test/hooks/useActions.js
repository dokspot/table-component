import { useMemo } from "react";

export default function useActions() {
  return useMemo(() => [
    {
      name: 'Action 1',
      action: () => {},
      defaults: {}
    }
  ], [])
}
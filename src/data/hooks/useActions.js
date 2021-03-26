import { useMemo } from "react";

export default function useActions() {
  return useMemo(() => [
    {
      name: 'Action 1',
      action: jest.fn(),
      defaults: {}
    },
    {
      name: 'Action 2',
      action: jest.fn(),
      defaults: {}
    }
  ], [])
}
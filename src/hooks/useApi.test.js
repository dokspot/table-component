import { renderHook, act } from '@testing-library/react-hooks'
import useApi from "./useApi";
import axios from "axios";

jest.mock("axios");

test("useApi", async () => {
  const mocks = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    }
  ]
  axios.get.mockReturnValue({ data: mocks })

  const { result, waitForNextUpdate } = renderHook(() => useApi('/api'))
  expect(result.current[0]).toEqual([])
  expect(result.current[1]).toBeTruthy()
  await waitForNextUpdate()
  expect(result.current[0]).toEqual(mocks)
  expect(result.current[1]).toBeFalsy()
});

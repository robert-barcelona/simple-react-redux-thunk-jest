import { retrievePersistedData, persistData } from "../index"
import userData from "../../../data/userdata.json"

const key = "foo"
const data = [userData]

beforeEach(() => {
  localStorage.clear()
  localStorage.getItem.mockClear()
  const error = persistData(data, key)
  if (error !== "")
    throw new Error("Error in test: data not persisted during beforeEach")
})

test("should retrieve from localStorage", () => {
  const result = retrievePersistedData(key)
  expect(localStorage.getItem).toHaveBeenLastCalledWith(key)
  expect(localStorage.getItem).toBeCalledTimes(1)
  expect(result).toEqual(data)
})

test("should return null for undefined key ", () => {
  const result = retrievePersistedData(undefined)
  expect(localStorage.getItem).toBeCalledTimes(0)
  expect(result).toEqual(null)
})

test("should return null for null key ", () => {
  const result = retrievePersistedData(null)
  expect(localStorage.getItem).toBeCalledTimes(0)
  expect(result).toEqual(null)
})

test("should return null for numeric key ", () => {
  const result = retrievePersistedData(123)
  expect(localStorage.getItem).toBeCalledTimes(0)
  expect(result).toEqual(null)
})

test("should return null for array key ", () => {
  const result = retrievePersistedData([123])
  expect(localStorage.getItem).toBeCalledTimes(0)
  expect(result).toEqual(null)
})

test("should return null for object key ", () => {
  const result = retrievePersistedData({ something: [123] })
  expect(localStorage.getItem).toBeCalledTimes(0)
  expect(result).toEqual(null)
})

test("should return null for empty string key ", () => {
  const result = retrievePersistedData('')
  expect(localStorage.getItem).toBeCalledTimes(0)
  expect(result).toEqual(null)
})

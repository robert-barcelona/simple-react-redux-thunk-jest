import { persistData } from "../index"
import userData from "../../../data/userdata.json"

beforeEach(() => {
  localStorage.clear()
  localStorage.setItem.mockClear()
})

test("should save to localStorage", () => {
  const fakeData = [userData]
  const key = "foo"
  const stringifiedFakeData = JSON.stringify(fakeData)
  const error = persistData(fakeData, key)
  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    key,
    stringifiedFakeData
  )
  expect(localStorage.setItem).toBeCalledTimes(1)
  expect(localStorage.__STORE__[key]).toEqual(stringifiedFakeData)
  expect(Object.keys(localStorage.__STORE__).length).toEqual(1)
  expect(error).toEqual("")
})

test("should return proper error if data is null", () => {
  const key = "foo"
  const error = persistData(null, key)
  expect(localStorage.setItem).toBeCalledTimes(0)
  expect(error).toEqual("Error in persisting storage: no data")
  expect(localStorage.__STORE__[key]).toEqual(undefined)
  expect(Object.keys(localStorage.__STORE__).length).toEqual(0)
})

test("should return proper error if data is undefined", () => {
  const key = "foo"
  const error = persistData(undefined, key)
  expect(localStorage.setItem).toBeCalledTimes(0)
  expect(error).toEqual("Error in persisting storage: no data")
  expect(localStorage.__STORE__[key]).toEqual(undefined)
  expect(Object.keys(localStorage.__STORE__).length).toEqual(0)
})

test("should return proper error if index is null", () => {
  const fakeData = [userData]
  const key = null
  const error = persistData(fakeData, key)
  expect(localStorage.setItem).toBeCalledTimes(0)
  expect(error).toEqual("Error in persisting storage: incorrect index")
  expect(Object.keys(localStorage.__STORE__).length).toEqual(0)
})

test("should return proper error if index is undefined", () => {
  const fakeData = [userData]
  const key = undefined
  const error = persistData(fakeData, key)
  expect(localStorage.setItem).toBeCalledTimes(0)
  expect(error).toEqual("Error in persisting storage: incorrect index")
  expect(Object.keys(localStorage.__STORE__).length).toEqual(0)
})

test("should return proper error if index is number", () => {
  const fakeData = [userData]
  const key = 123
  const error = persistData(fakeData, key)
  expect(localStorage.setItem).toBeCalledTimes(0)
  expect(error).toEqual("Error in persisting storage: incorrect index")
  expect(Object.keys(localStorage.__STORE__).length).toEqual(0)
})

test("should return proper error if index is array", () => {
  const fakeData = [userData]
  const key = [123]
  const error = persistData(fakeData, key)
  expect(localStorage.setItem).toBeCalledTimes(0)
  expect(error).toEqual("Error in persisting storage: incorrect index")
  expect(Object.keys(localStorage.__STORE__).length).toEqual(0)
})

test("should return proper error if index is object", () => {
  const fakeData = [userData]
  const key = { something: [123] }
  const error = persistData(fakeData, key)
  expect(localStorage.setItem).toBeCalledTimes(0)
  expect(error).toEqual("Error in persisting storage: incorrect index")
  expect(Object.keys(localStorage.__STORE__).length).toEqual(0)
})

test("should return proper error if index is empty string", () => {
  const fakeData = [userData]
  const key = ''
  const error = persistData(fakeData, key)
  expect(localStorage.setItem).toBeCalledTimes(0)
  expect(error).toEqual("Error in persisting storage: incorrect index")
  expect(Object.keys(localStorage.__STORE__).length).toEqual(0)
})

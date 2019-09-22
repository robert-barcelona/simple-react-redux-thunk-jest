import axios from "axios";
import { logicGetFriend } from "../index";
import userData from "../../../data/userdata.json";
//jest.mock('axios');

beforeEach(()=> axios.get.reset())

test("logicGetFriend fetches correct results from randomme api", async () => {
  const mockedData = { data: { results: [userData] } };
  axios.get.mockImplementationOnce(() => Promise.resolve(mockedData));
  const receivedData = await logicGetFriend();
  expect(receivedData).toEqual(userData);
});

test("logicGetFriend will call axios once", async () => {
  const mockedData = { data: { results: [userData] } };
  axios.get.mockImplementationOnce(() => Promise.resolve(mockedData));
  await logicGetFriend();
  expect(axios.get).toBeCalledTimes(1)
});

test("logicGetFriend throws error when no results returned by axios", async () => {
  const mockedData = undefined;
  axios.get.mockImplementationOnce(() => Promise.resolve(mockedData));
  await expect(logicGetFriend()).rejects.toThrow(
    "No results returned from API"
  );
});

test("logicGetFriend throws error when no results returned by axios", async () => {
  const mockedData = undefined;
  axios.get.mockImplementationOnce(() => Promise.resolve(mockedData));
  await expect(logicGetFriend()).rejects.toThrow(
    "No results returned from API"
  );
});

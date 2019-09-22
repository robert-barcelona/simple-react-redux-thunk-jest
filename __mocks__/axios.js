export default {
  get: jest.fn(() => {
    console.log("mock axios called");
    return Promise.resolve({});
  })
};

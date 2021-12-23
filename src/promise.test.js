const fetch = require("node-fetch");
const api = require("./__mocks__/api");

it("call api to get employees", () => {
  expect.assertions(1);
  return api
    .getEmployees(fetch)
    .then((data) => {
      expect(data.status).toEqual("success");
    }).catch((error) => {
      console.log(`The unknown error has occurred: ${error}`);
    });
});

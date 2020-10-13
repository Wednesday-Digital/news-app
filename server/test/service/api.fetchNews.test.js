const axios = require("axios");
const API = require("../../src/services/API");
const config = require("../../src/config");

jest.mock("axios");
const resp = {
  response: {
    status: "ok"
  }
};

describe("Tests for the fetchNews method for the API class", () => {
  test("Should return an object containing the news", async () => {
    //Arrange
    console.log(config)
    axios.get.mockResolvedValue(resp);
    const api = new API(config.baseURL, config.apiKey);
    const search = "debates";

    //Act
    const RESULT = await api.fetchNews(search);

    //Assert
    expect.assertions(1);
    expect(RESULT.response.status).toEqual("ok");
  });
});
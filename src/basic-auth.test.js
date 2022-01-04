import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("logs in user", async () => {
    await page.authenticate({
      username: "foo",
      password: "bar",
    });

    await page
      .goto("http://httpbin.org/basic-auth/foo/bar")
      .then((response) => {
        //console.log(response); //Data in response, handle data?
        expect(response._status).toEqual(200);
      })
      .catch((error) => {
        throw error
      });
  });

  afterAll(() => browser.close());
});

import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    let response = await page.goto("http://localhost:3000");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    await page.waitForSelector(".App-welcome-text");
    const text = await page.$eval(".App-welcome-text", (e) => e.textContent);
    expect(text).toContain("Edit src/App.js and save to reload.");
  });

  afterAll(() => browser.close());
});

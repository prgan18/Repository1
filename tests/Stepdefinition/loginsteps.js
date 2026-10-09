const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const assert = require("node:assert");


let browser;
let context;
let page;

Given("The user should be in facebook login page", async function () {

    browser = await chromium.launch({headless:false})
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://www.facebook.com/")
});

When("The user has to fill username and password", async function () {

    await page.fill("//input[@name='email']","Prathiba");
    await page.fill("//input[@name='pass']","1234557");
  
});

When("The user has to click login button", async function () {
   await page.click("//div[@aria-label='Log in']");
});

Then("The user should get error message", async function () {

    const currentUrl = await page.url();
    assert.ok(currentUrl.includes("facebook"));
    console.log("-----Invalid Login------");
    await page.close();
  
});
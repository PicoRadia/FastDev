// December 7th , 2020
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: true}); // default is true
  const page = await browser.newPage();
  await page.goto('https://www.subaru.com/shopping-tools/payment-calculator.html');

  await page.evaluate(() => document.querySelector('#top_your_location > strong').innerText = 90011);
  await page.waitForSelector('#models > li');
  await page.evaluate(() => document.querySelectorAll('#models > li')[1].click());
  await page.waitForSelector('#trims > li');
  await page.evaluate(() => document.querySelectorAll('#trims > li')[0].click());
  var model =  await page.evaluate(async() => {return await document.querySelector('#wrapper > div.base-container.iparsys.parsys > div.payment.section > div.pc-calculator-wrapper > div > div > div.wrapper-topic-elements.iparsys.parsys > div.dropdowns.section > div > ul > li.dropdown.selected.opened > div.select > span.selected-text').innerText;});
  var trim =  await page.evaluate(async ()=> {return await document.querySelector('#trims > li.MJA-model.modelTrims.active > p:nth-child(1) > span.model').innerText;});

  //await page.waitForSelector('#pd\.lease\.formSectionWrapper');

  // var trim = document.querySelector('#trims > li.MJA-model.modelTrims.active > p:nth-child(1) > span.model').innerText;
  await console.log("starting");
  await console.log(model);
  await console.log(trim);
  await console.log("done");
  // second dropdown
  //var li = document.querySelectorAll('#trims > li');
  //for(var i= 0 ; i< li.length;i++){li[i].click();}
 
  

  //await browser.close();
})();

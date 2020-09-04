const puppeteer = require('puppeteer');

(async () => {
  // Nuestro codigo
  console.log('Lanzamos navegador...');
  //const browser = await puppeteer.launch(); // Este ejecuta el navegador pero no lo muestra en pantalla...
  const browser = await puppeteer.launch({ headless: false }); // Esto es para ver el navegador en pantalla...

  const page = await browser.newPage();
  await page.goto('https://wikipedia.org/wiki/Node.js');

  var title1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML);

    return h1.innerHTML;
  });

  console.log(title1);
  console.log('Cerramos navegador...');
  //   browser.close();
  //   console.log('Navegador cerrado...');
})();

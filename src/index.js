const pupeteer = require('puppeteer');
let cpfconsultado = '728.799.390-20'

const consultacpf = async (cpf) =>{
    const browser = await pupeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.situacao-cadastral.com/');
    await page.waitFor('input[name="doc"]');
    await page.type('input[name="doc"]',cpf, {delay: 185} )
    await page.keyboard.press('Enter');
    await page.waitFor('#corpo > tbody > tr:nth-child(2) > td > span > a')
    await page.screenshot({path:`consultaCPF-${cpf}.png`});
    //await browser.close();
};
consultacpf(cpfconsultado);
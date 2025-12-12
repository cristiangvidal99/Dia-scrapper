const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://diaonline.supermercadosdia.com.ar/';

async function getHtml(url) {
    const response = await axios.get(url);
    return response.data;
}

async function main() {
    try {
        const html = await getHtml(url);

        const $ = cheerio.load(html);

        const precios = [];

        $('span.diaio-store-5-x-sellingPriceValue').each((i, el) => {
            precios.push($(el).text().trim());
        });

        fs.writeFileSync('precio.txt', JSON.stringify(precios, null, 2));

        console.log(precios);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();

// Резервная копия базы данных

const { dirname } = require('path');
const path = require('path');

const cartURL = './scripts/fillDB/data/cadt.json';
const catalogURL = './scripts/fillDB/data/catalog.json';
const menuURL = './scripts/fillDB/data/menu.json';

const dbURL = path.join(__dirname, '../', '../', 'src', 'db');

const reader = require('../../plagins/reader');
const writer = require('../../plagins/writer');

async function fillDB() {
  try {
    const data = await Promise.all([
      await reader(cartURL),
      await reader(catalogURL),
      await reader(menuURL)
    ]);
    const [cart, catalog, menu] = data;

    await Promise.all([
      await writer(dbURL + '/cart.json', cart),
      await writer(dbURL + '/catalog.json', catalog),
      await writer(dbURL + '/menu.json', menu)
    ]);
    console.log('DB filled');
  }
  catch (err) {
    throw new Error(' Fill DB err', err);
  }
};

fillDB();
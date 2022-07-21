const fs = require('fs');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const server = express();

server.use(express.json());

server.use('/', express.static('./public'));

const catalogURl = './src/db/catalog.json';
const cartUrl = './src/db/cart.json';
const menuUrl = './src/db/menu.json';

const reader = require('../plagins/reader');
const writer = require('../plagins/writer');

const cart = require('../src/components/cart');

// Get requests

server.get('/catalog', async (req, res) => {
    try {
        const data = await reader(catalogURl);
        res.json(data);
    } catch (err) {
        console.log('GET /catalog ERR');
    };
});

server.get('/cart', async (req, res) => {
    try {
        const data = await reader(cartUrl);
        res.json(data);
    } catch (err) {
        console.log('GET /cart ERR');
    };
});

server.get('/menu', async (req, res) => {
    try {
        const data = await reader(menuUrl);
        res.json(data);
    } catch (err) {
        console.log('GET /menu ERR');
    };
});

// Post request for Cart

server.post('/cart', async (req, res) => {
    const newItem = req.body;
    try {
        const data = await reader(cartUrl);
        const newCart = cart.add(data, newItem);
        data.total = cart.countTotal(data);
        await writer(cartUrl, newCart);
        res.json({ error: false });
    }
    catch (err) {
        console.log('POST /cart ERR');
        res.json({ error: true });
    };
});

// Put request for Cart

server.put('/cart/:id', async (req, res) => {
    const { value } = req.body;
    const { id } = req.params;
    try {
        const data = await reader(cartUrl);
        const newCart = cart.change(data, id, value);
        data.total = cart.countTotal(data);
        await writer(cartUrl, newCart);
        res.json({ error: false });
    }
    catch (err) {
        console.log('PUT /cart ERR');
        res.json({ error: true });
    };
});

// Delete reqest for Cart

server.delete('/cart/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let data = await reader(cartUrl);
        const newCart = cart.remove(data, id);
        data.total = cart.countTotal(data);
        await writer(cartUrl, newCart);
        res.json({ error: false });
    }
    catch (err) {
        console.log('DELETE /cart ERR');
        res.json({ error: true });
    };
});

console.log('Server has started seccessfully');

server.listen(3000);

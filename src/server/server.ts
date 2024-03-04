import express from 'express';
import { PORT, HOST } from './config';
import query from './db';

const server = express();

server.use(express.static('dist'));

server.set('view engine', 'ejs');

server.get('/', async (req, res) => {
    // try {
    //     const result = await query('SELECT * FROM medicines_register', null);
    //     res.json(result.rows);
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).send('Internal Server Error');
    // }
    res.render('index');
});

server.get('/medicines_list', async (req, res) => {
    try {
        const result = await query('SELECT * FROM medicines_register', null);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

server.get('/shops_prices', async (req, res) => {
    const strQuery = `SELECT shops.name as shopName, shops.address, medicines_register.name as medicineName, shops_to_medicines.price
    FROM shops 
    inner join shops_to_medicines on shops.id = shops_to_medicines.shop_id
    inner join medicines_register on shops_to_medicines.medicine_id=medicines_register.id`;
    try {
        const result = await query(strQuery, null);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

server.get('/shops_list', async (req, res) => {
    try {
        const result = await query('SELECT * FROM shops', null);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



server.listen(PORT, HOST, () => {
    console.info(`Express server is listening at http://${HOST}:${PORT}`);
});
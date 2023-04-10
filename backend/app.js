var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
const { Sequelize, DataTypes } = require('sequelize');

//var indexRouter = require('./routes/index');
//var listingsRouter = require('./routes/listings');

var app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const Listing = sequelize.define('Listing', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    currency: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");

// Index
app.get('/', async (req, res) => {
    res.send('Available routes: <a href="/listings">/listings</a>')
});

// Create a new listing
app.post('/listings', async (req, res) => {
    const { listings } = req.body;
    try {
        const createdListings = await Listing.bulkCreate(listings);
        res.json(createdListings);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating listing');
    }
});

// Read all listings
app.get('/listings', async (req, res) => {
    try {
        const listings = await Listing.findAll();
        res.json(listings);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving listings');
    }
});

// Read a specific listing by ID
app.get('/listings/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const listing = await Listing.findByPk(id);
        if (!listing) {
            res.status(404).send(`listing with ID ${id} not found`);
        } else {
            res.json(listing);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving listing');
    }
});

// Update a listing by ID
app.put('/listings/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, currency } = req.body;
    try {
        const updatedListing = await Listing.update({ name, price, currency }, { where: { id } });
        if (updatedListing[0] === 0) {
            res.status(404).send(`listing with ID ${id} not found`);
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting message');
    }
});

// Delete a listing by ID
app.delete('/listings/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const listing = await Listing.findByPk(id);
        if (!listing) {
            return res.status(404).send('Message not found');
        }
        await listing.destroy();
        res.send(`Message with id ${id} has been deleted`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
});

//app.use('/', indexRouter);
//app.use('/listings', listingsRouter(sequelize));

module.exports = app;

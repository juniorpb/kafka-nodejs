const mongoose = require('mongoose');
const {mongodbConfig} = require('../config/env.json')

const Card = require('../model/cardModel');

async function mongodbSave(cardConsumer){
    await mongoose.connect(mongodbConfig.hostname, {
        useNewUrlParser: true,
    });
  
    const newCardConsumer = await Card.create(cardConsumer);
    console.log("Card Saved: \n", newCardConsumer);
}

module.exports = {mongodbSave}
  
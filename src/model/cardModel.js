const { Schema, model } = require('mongoose');

const CardModel = new Schema({
    typePgt:        String,
    value:          String,
    installment:    String,
    tid:            String,
    customerID:     String,
    count:          String
});


module.exports = model('card_pgt_result', CardModel);
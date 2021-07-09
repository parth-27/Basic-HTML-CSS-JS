const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creaeting schema and model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

// 'mariochar' is the name of the model based on MarioCharSchema
const MarioChar = mongoose.model('mariochar', MarioCharSchema); 

// exporting the module
module.exports = MarioChar;

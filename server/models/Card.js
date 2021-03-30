const { Schema } = require('mongoose');

const cardSchema = new Schema({
    cardId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    grading: {
        type: String,
    },
    holo: {
        type: Boolean,
    },
    superRare: {
        type: Boolean,
    },
    secretRare: {
        type: Boolean,
    },
    promo: {
        type: Boolean,
    },
    reverse: {
        type: Boolean,
    },
    sold: {
        type: Boolean,
    }    
  });
  
  module.exports = cardSchema;
  
const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    /* not sure what link is supposed to be */
    /* link: {
      type: String,
    }, */
    grading: {
        type: String
    },
    holo: {
        type: Boolean
    },
    reverse: {
      type: Boolean
    },
    superRare: {
        type: Boolean
    },
    secretRare: {
        type: Boolean
    },
    promo: {
        type: Boolean
    },
    askingPrice: {
        type: Number,
        required: true,
        min: 0.01
    },
    sold: {
        type: Boolean
    }    
  });

  const Card = mongoose.model('Card', cardSchema);
  
  module.exports = Card;
  
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection')
const path = require('path');

const PORT = process.env.PORT || 3001;


const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Card {
    _id: ID
    name: String
    createdAt: String
    setName: String
    email: String
    image: String
    grading: String
    holo: Boolean
    reverse: Boolean
    superRare: Boolean
    secretRare: Boolean
    promo: Boolean
    askingPrice: Float
    sold: Boolean
  }

  type User {
    _id: ID
    username: String
    email: String
    postedCards: [Card]
  }

  type Auth {
    token: ID
    user: User
  }

  input userCard {
    name: String!
    setName: String
    image: String
    email: String
    grading: String
    holo: Boolean
    reverse: Boolean
    superRare: Boolean 
    secretRare: Boolean 
    promo: Boolean 
    askingPrice: Float! 
    sold: Boolean
  }

  type Query {
    cards(email: String): [Card]
    card(_id: ID!): Card
    user(username: String!): User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addCard(name: String!,setName: String,image: String,email: String,grading: String,holo: Boolean,reverse: Boolean,superRare: Boolean,secretRare: Boolean ,promo: Boolean, askingPrice: String!, sold: Boolean): Card
    deleteCard(_id: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
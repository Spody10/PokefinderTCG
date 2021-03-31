const { AuthenticationError } = require('apollo-server-express');
const { User, Card } = require('../models');
const { getMaxListeners } = require('../models/Card');
/* const { signToken } = require('../utils/auth'); */

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('postedCards');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('postedCards');
    },
    cards: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Card.find(params);
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return { user };
    },
    addCard: async (parent, args, context) => {
      /* if (context.user) { */
        const card = await Card.create({ ...args, email: /* context.user.email */ "akira941@getMaxListeners.com"});

        await User.findByIdAndUpdate(
          { _id: /* context.user._id */ "6062eb1890744a2a7c0925a0"},
          { $push: { postedCards: card._id } },
          { new: true }
        );

        return card;
     /*  }

      throw new AuthenticationError('You need to be logged in!'); */
    }
  }
};

module.exports = resolvers;

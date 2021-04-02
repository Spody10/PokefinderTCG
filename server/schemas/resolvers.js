const { AuthenticationError } = require('apollo-server-express');
const { User, Card } = require('../models');
const { getMaxListeners } = require('../models/Card');
const { Cloudinary } = '../lib';

const { signToken } = require('../utils/auth');

/* require('dotenv').config();
const cloudinary = require('cloudinary'); */

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
      return Card.find(params).sort({ createdAt: -1 });
    },
    card: async (parent, { _id }) => {
      return Card.findOne({ _id })
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent,  { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPW = await user.isCorrectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user};
    },

    addCard: async (parent, args, context) => {
      if (context.user) {
        /* const targetImage = await Cloudinary.upload(args.image)
        console.log(targetImage) */
        const card = await Card.create({ ...args, /* image: targetImage, */ email: context.user.email});
        
        await User.findByIdAndUpdate(
          { _id: context.user._id},
          { $push: { postedCards: card._id } },
          { new: true }
        );

        return card;
     }

      throw new AuthenticationError('You need to be logged in!');
    },
    deleteCard: async (parent, {_id}, context) => {
      /* if (context.user) { */
        const delCard = await Card.findByIdAndDelete(_id)
        const updatedUser = await User.findOneAndUpdate(
          { _id: /* context.user._id */'6062eb1890744a2a7c0925a0' },
          { $pull: { postedCards: { postedCards: _id} } },
          { new: true }
        );

        return updatedUser;
      /* }

      throw new AuthenticationError('You need to be logged in!'); */
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    }
  }
};

module.exports = resolvers;

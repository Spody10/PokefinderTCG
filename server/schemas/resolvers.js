const { AuthenticationError } = require('apollo-server-express');
const { User, Card } = require('../models');
const { getMaxListeners } = require('../models/Card');
const { Cloudinary } = '../lib';
/* const { signToken } = require('../utils/auth'); */
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

      return { user };
    },
    addCard: async (parent, args, context) => {
      /* const Cloudinary = {upload: async (image) => {
        const res = await cloudinary.v2.uploader.upload(image, {
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET,
            cloud_name: process.env.CLOUDINARY_NAME,
            folder: "card-images/"
        })
        return res.secure_url
    }} */
      /* if (context.user) { */
        /* const targetImage = await Cloudinary.upload(args.image)
        console.log(targetImage) */
        const card = await Card.create({ ...args, /* image: targetImage, */ email: /* context.user.email */ "akira941@getMaxListeners.com"});
        
        await User.findByIdAndUpdate(
          { _id: /* context.user._id */ "6062eb1890744a2a7c0925a0"},
          { $push: { postedCards: card._id } },
          { new: true }
        );

        return card;
     /*  }

      throw new AuthenticationError('You need to be logged in!'); */
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
    }
  }
};

module.exports = resolvers;

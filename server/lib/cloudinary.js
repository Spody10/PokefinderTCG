require('dotenv').config();
const cloudinary = require('cloudinary');

const Cloudinary = {upload: async (image) => {
    const res = await cloudinary.v2.uploader.upload(image, {
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        cloud_name: process.env.CLOUDINARY_NAME,
        folder: "card-images/"
    })
    return res.secure_url
}}

module.exports = {Cloudinary};
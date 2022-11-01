import dotenv from 'dotenv'
dotenv.config();
import cloudinary from 'cloudinary'

export const cloud = cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
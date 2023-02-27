/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import mongoose, { Schema } from 'mongoose'
import {
  type ItemDataType,
  type UserDataType
} from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Shema = mongoose.Schema

const ItemSchema = new Schema<ItemDataType>({
  flipMachine: { type: Number },
  etfStock: { type: Number },
  etfBonds: { type: Number },
  lemonade: { type: Number },
  iceCreameTruck: { type: Number },
  house: { type: Number },
  townHouse: { type: Number },
  mansion: { type: Number },
  industrialSpace: { type: Number },
  hotelSkyscraper: { type: Number },
  bulletSpeedSkyRailway: { type: Number },
  email: { type: String, required: true }
})

const UserSchema = new Schema<UserDataType>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

export const ItemModel =
  mongoose.models.Item || mongoose.model('Item', ItemSchema)

export const UserModel =
  mongoose.models.User || mongoose.model('User', UserSchema)

import { type Types } from 'mongoose'
import { type NextApiRequest } from 'next'

// shemaModels.ts
export interface ItemDataType {
  flipMachine: number
  etfStock: number
  etfBonds: number
  lemonade: number
  iceCreameTruck: number
  house: number
  townHouse: number
  mansion: number
  industrialSpace: number
  hotelSkyscraper: number
  bulletSpeedSkyRailway: number
  email: string
}

// shemaModels.ts
export interface UserDataType {
  name: string
  email: string
  password: string
}

// auth.ts
export interface DecodedType {
  email: string
}

// auth.ts
export interface ExtendedNextApiRequestAuth
  extends NextApiRequest {
  headers: {
    authorization: string
  }
  body: {
    email: string
  }
}

// Common
export interface ResMessageType {
  message: string
  token?: string
}

// register.ts, login.ts
export interface ExtendedNextApiRequestUser
  extends NextApiRequest {
  body: UserDataType
}

// login.ts
export interface SavedUserDataType extends UserDataType {
  _id: Types.ObjectId
}

// readAll.ts, [id].ts, update/[id].ts, delete/[id].ts
export interface SavedItemDataType extends ItemDataType {
  _id: Types.ObjectId
}

// readAll.ts
export interface ResReadAllType {
  message: string
  allItems?: SavedItemDataType[]
}

// create.ts
export interface ExtendedNextApiRequestItem
  extends NextApiRequest {
  body: ItemDataType
}

// [id].ts
export interface ResReadSingleType {
  message: string
  singleItem?: SavedItemDataType
}

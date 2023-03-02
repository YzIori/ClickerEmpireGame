/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import connectDB from '@/utils/database'
import { ItemModel } from '@/utils/schemaModels'
import auth from '../user/auth'
import type { NextApiResponse } from 'next'
import type { ExtendedNextApiRequestItem } from '@/utils/types'

const createItem = async (
  req: ExtendedNextApiRequestItem,
  res: NextApiResponse
): Promise<any> => {
  try {
    await connectDB()
    await ItemModel.create(req.body)
    return res
      .status(200)
      .json({ message: 'アイテム作成成功' })
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'アイテム作成失敗' })
  }
}

export default auth(createItem)

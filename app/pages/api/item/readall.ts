/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import connectDB from '@/utils/database'
import { ItemModel } from '@/utils/schemaModels'
import type { NextApiRequest, NextApiResponse } from 'next'
import type {
  SavedItemDataType,
  ResReadAllType
} from '@/utils/types'

const getAllItems = async (
  req: NextApiRequest,
  res: NextApiResponse<ResReadAllType>
): Promise<void> => {
  try {
    await connectDB()
    const allItems: SavedItemDataType[] =
      await ItemModel.find()
    return res.status(200).json({
      message: 'アイテム読み取り成功（ALL）',
      allItems
    })
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'アイテム読み取り失敗（ALL）' })
  }
}

export default getAllItems

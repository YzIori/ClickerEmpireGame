/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import connectDB from '@/utils/database'
import { ItemModel } from '@/utils/schemaModels'
import type {
  ExtendedNextApiRequestItem,
  ResMessageType,
  SavedItemDataType
} from '@/utils/types'
import type { NextApiResponse } from 'next'
import auth from '../../user/auth'

const deleteItem = async (
  req: ExtendedNextApiRequestItem,
  res: NextApiResponse<ResMessageType>
): Promise<void> => {
  try {
    await connectDB()
    const singleItem: SavedItemDataType | null =
      await ItemModel.findById(req.query.id)

    if (singleItem == null) {
      return res.status(400).json({
        message: 'アイテムが存在していないため削除失敗'
      })
    }
    await ItemModel.deleteOne({ _id: req.query.id })
    return res
      .status(200)
      .json({ message: 'アイテム削除成功' })
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'アイテム削除失敗' })
  }
}

export default auth(deleteItem)

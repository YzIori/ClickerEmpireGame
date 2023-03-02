/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import connectDB from '@/utils/database'
import { ItemModel } from '@/utils/schemaModels'
import type {
  ExtendedNextApiRequestItem,
  ResMessageType,
  SavedItemDataType
} from '@/utils/types'
import type { NextApiResponse } from 'next'

const updateItem = async (
  req: ExtendedNextApiRequestItem,
  res: NextApiResponse<ResMessageType>
): Promise<void> => {
  try {
    await connectDB()
    const singleItem: SavedItemDataType | null =
      await ItemModel.findById(req.query.id)

    if (singleItem == null) {
      return res.status(400).json({
        message: 'アイテムが存在していないため失敗'
      })
    }

    await ItemModel.updateOne(
      { _id: req.query.id },
      req.body
    )

    return res
      .status(200)
      .json({ message: 'アイテム編集成功' })
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'アイテム編集失敗' })
  }
}

export default updateItem

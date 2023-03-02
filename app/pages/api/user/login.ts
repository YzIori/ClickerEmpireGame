/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import jwt from 'jsonwebtoken'
import connectDB from '@/utils/database'
import { UserModel } from '@/utils/schemaModels'
import type {
  ExtendedNextApiRequestUser,
  ResMessageType,
  SavedUserDataType
} from '@/utils/types'
import type { NextApiResponse } from 'next'

const SECRET_KEY = 'nextmarket'

const loginUser = async (
  req: ExtendedNextApiRequestUser,
  res: NextApiResponse<ResMessageType>
): Promise<void> => {
  try {
    await connectDB()

    const savedUserData: SavedUserDataType | null =
      await UserModel.findOne({
        email: req.body.email
      })

    if (savedUserData != null) {
      if (req.body.password === savedUserData.password) {
        const payload = {
          email: req.body.email
        }

        const token = jwt.sign(payload, SECRET_KEY, {
          expiresIn: '23h'
        })

        return res
          .status(200)
          .json({ message: 'ログイン成功', token })
      } else {
        return res.status(400).json({
          message:
            'ログイン失敗：パスワードが間違っています'
        })
      }
    } else {
      return res
        .status(400)
        .json({ message: 'ログイン失敗' })
    }
  } catch (err) {
    return res.status(400).json({ message: 'ログイン失敗' })
  }
}

export default loginUser

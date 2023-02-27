/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/await-thenable */
import jwt from 'jsonwebtoken'
import type { NextApiResponse } from 'next'
import type {
  ExtendedNextApiRequestAuth,
  ResMessageType,
  DecodedType
} from '@/utils/types'

const SECRET_KEY = 'nextmarket'

// eslint-disable-next-line @typescript-eslint/ban-types
const auth = (handler: Function) => {
  return async (
    req: ExtendedNextApiRequestAuth,
    res: NextApiResponse<ResMessageType>
  ) => {
    if (req.method === 'GET') {
      return handler(req, res)
    }

    const token = await req.headers.authorization.split(
      ' '
    )[1] // フロントエンドから送信されるトークンを取得する。

    if (!token) {
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      return res
        .status(401)
        .json({ message: 'トークンがありません' })
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY)
      req.body.email = (decoded as DecodedType).email
      return handler(req, res)
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      return res.status(401).json({
        message:
          'トークンが正しくないので、ログインしてください。'
      })
    }
  }
}

export default auth

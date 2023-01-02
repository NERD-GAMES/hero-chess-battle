import { bff } from '@hero/bff'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const result = bff()
  return res.json({ result })
}

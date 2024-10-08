// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcrypt";
import salt from '../../util/salt';
type Data = {
  hash: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.debug(salt, 'should not change unless restarted')
const hash = bcrypt.hashSync(req.body.crushName || req.query.crushName, salt)
res.json({ hash })
}


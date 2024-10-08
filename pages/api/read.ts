// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcrypt";
type Data = {
  isCorrect: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
const isCorrect = bcrypt.compareSync(req.body.crushHash || req.query.crushHash, req.query.hash || req.body.hash)
res.json({ isCorrect })
}


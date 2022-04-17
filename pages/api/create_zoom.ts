// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { startDate, endDate, topic } = req.body
  const begin = new Date(startDate)
  const end = new Date(endDate)
  const duration = (end.valueOf() - begin.valueOf()) / 1000 / 60

  const body = {
    start_time: begin.toISOString().replace(/\.[0-9]{3}/, ''),
    duration: duration,
    type: 2,
    topic
  }

  const result = await fetch(`https://api.zoom.us/v2/users/me/meetings`, {
    method: 'post',
    body : JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.ZOOM_TOKEN}`,
    },
  });

  const response = await result.json();
  res.status(200).json(response);
}

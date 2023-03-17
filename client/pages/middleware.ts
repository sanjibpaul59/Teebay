import { IncomingMessage } from 'http'
import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

export type NextApiRequestWithSession = NextApiRequest & {
  session?: { [key: string]: any }
}

export type NextPageContextWithSession = {
  req: NextApiRequestWithSession
  res: NextApiResponse
}

export async function getSession(
  req: IncomingMessage
): Promise<{ [key: string]: any }> {
  const cookies = cookie.parse(req.headers.cookie || '')
  const sessionCookie = cookies['user_authentication']
  if (!sessionCookie) {
    return {}
  }

  const response = await fetch('http://localhost:3000/session', {
    headers: { cookie: `user_authentication=${sessionCookie}` },
  })

  if (response.status === 401) {
    return {}
  }

  const session = await response.json()
  return session
}


import { parse } from 'cookie'

export function getUserIdFromSessionCookie(
  cookieHeader: string
): string | null {
  const cookies = parse(cookieHeader)
  const sessionCookie = cookies['_your_session_cookie_name']
  if (!sessionCookie) {
    return null
  }
  const base64Payload = sessionCookie.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64').toString('utf-8')
  const { user_id } = JSON.parse(payload)
  return user_id
}

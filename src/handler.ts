import { Request, Router } from 'itty-router'

import Download from './handlers/location'

const router = Router()

router
  .get('/location', Download)
  .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = (request: Request) => router.handle(request)
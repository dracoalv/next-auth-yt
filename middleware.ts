import { NextResponse } from 'next/server'
import { withAuth, NextRequestWithAuth, NextAuthMiddlewareOptions } from 'next-auth/middleware'

const middleware = (request: NextRequestWithAuth) => {
  console.log('[MIDDLEWARE_NEXTAUTH_TOKEN]: ', request.nextauth.token)

  const isPrivateRoutes = request.nextUrl.pathname.startsWith('/private')
  const isAdminUser = request.nextauth.token?.role === 'admin'

  if (isPrivateRoutes && !isAdminUser) {
    return NextResponse.rewrite(new URL('/denied', request.url))
  }
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: '/private'
}
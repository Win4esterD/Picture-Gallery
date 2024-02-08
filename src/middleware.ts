import {NextResponse, NextRequest} from 'next/server';
import {authorizeUser} from './services/userActions';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.origin + '/auth/';
  const code = request.nextUrl.search.slice(6);
  const token = await authorizeUser(code, url);
  const response = NextResponse.next();
  const oneDay = 86400000;
  const cookieExpiration = Date.now() + oneDay * 30;
  response.cookies.set('token', token?.access_token, {
    maxAge: cookieExpiration,
  });
  return response;
}

export const config = {
  matcher: '/auth/',
};

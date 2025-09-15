import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {

  const token = await getToken({
    req,
    // secret: process.env.NEXTAUTH_SECRET as string,
    // cookieName: "__Secure-authjs.session-token",
    // secureCookie : true,
  });


  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('error', 'ranking');
    return NextResponse.redirect(url);
  }

  // Check if user is banned by making an API call instead of direct Prisma
  if (token.login) {
    try {
      // Create a new URL for the API call
      const apiUrl = new URL('/api/auth/check-ban', req.url);
      apiUrl.searchParams.set('login', token.login as string);
      
      const response = await fetch(apiUrl.toString(), {
        headers: {
          'Cookie': req.headers.get('Cookie') || '',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.banned) {
          const url = req.nextUrl.clone();
          url.pathname = '/';
          url.searchParams.set('error', 'banned');
          url.searchParams.set('reason', encodeURIComponent(data.reason));
          return NextResponse.redirect(url);
        }
      }
    } catch (error) {
      console.error('Error checking ban status:', error);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/ranking', '/blackhole'],
};

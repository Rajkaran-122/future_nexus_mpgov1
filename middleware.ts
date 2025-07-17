import { NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protect all /dashboard routes
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      const loginUrl = new URL('/auth/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*'],
}; 
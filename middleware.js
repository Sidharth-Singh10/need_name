import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside


export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/Login' || path === '/SignUp'

   const token= request.cookies.get('token')?.value || ''

    if (isPublicPath && token)
    {
      return NextResponse.redirect(new URL ('/',request.nextUrl))

    }

    if(!isPublicPath && !token)
    {
      return NextResponse.redirect(new URL ('/Login',request.nextUrl))


    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/Login',
    '/Incomplete',
    '/SignUp',

  ]


}
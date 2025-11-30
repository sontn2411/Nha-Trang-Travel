import createIntlMiddleware from 'next-intl/middleware'

export default createIntlMiddleware({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import '@/styles/index.css'
import Header from '@/components/layout/header/Header'
import { Metadata } from 'next'
import { Geist } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Nha Trang Travel',
  description: '',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

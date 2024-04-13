import { Libre_Franklin } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { Rubik } from 'next/font/google'
import './globals.css'

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable + rubik.variable}>
        {children}
      </body>
    </html>
  )
}
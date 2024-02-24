import { Lato } from 'next/font/google'
import '../styles.css'

const lato = Lato({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-lato',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${lato.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
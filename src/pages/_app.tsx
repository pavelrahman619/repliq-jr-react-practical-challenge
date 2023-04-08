import '@/styles/globals.css'
import { Lato } from 'next/font/google'
import type { AppProps } from 'next/app'

const inter = Lato({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} prose`}>
      <Component {...pageProps} />
    </main>
  )
}

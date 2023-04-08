import '@/styles/globals.css'
import { Lato } from 'next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'

const inter = Lato({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={`${inter.className} prose`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

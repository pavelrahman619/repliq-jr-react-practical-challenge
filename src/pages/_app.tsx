import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex items-center justify-center text-center min-h-screen'>
      <ThemeProvider>
        <main className={`prose w-full`}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </div>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-purple-500 via-yellow-200 to-blue-600
    `}>
      <span className='text-4xl'>TEXTO</span>
    </div>
  )
}

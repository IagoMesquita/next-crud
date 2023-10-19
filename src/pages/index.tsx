import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-l to-blue-500 from-purple-500  
    text-white 
    `}>
      <Layout title='Cadastro Simples'>
        <span>Conteúdo</span>
      </Layout>
    </div>
  )
}

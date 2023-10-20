import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Client from '@/core/Client'
import Table from '@/components/Table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const mockClients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlod', 23, '3'),
    new Client('Pedro', 54, '4'),
  ]

  const selectedClient = (client: Client) => {
    console.log(client.name)
  }

  const delectedClient = (client: Client) => {
    console.log(`Excluir ${client.name}`)
  }
  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-l to-blue-500 from-purple-500  
    text-white 
    `}>
      <Layout title='Cadastro Simples'>
        <Table
          clients={mockClients}
          selectedClient={selectedClient}
          delectedClient={delectedClient}
        />
      </Layout>
    </div>
  )
}

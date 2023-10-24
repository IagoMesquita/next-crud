import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Client from '@/core/Client'
import Table from '@/components/Table'
import Button from '@/components/Button'
import Form from '@/components/Form'
import { useState } from 'react'
import { ClientRepository } from '@/core/ClientRepository'
import ClientCollection from '@/backend/db/ClientCollection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const repoClients: ClientRepository = new ClientCollection()

  const mockClients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlod', 23, '3'),
    new Client('Pedro', 54, '4'),
  ]

  const [isVisible, setIsVisible] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Client>(Client.empty)


  const selectedClient = (client: Client) => {
    setClient(client)
    setIsVisible('form')
  }

  const delectedClient = (client: Client) => {
    console.log(`Excluir ${client.name}`)
  }

  const newClient = () => {
    setClient(Client.empty())
    setIsVisible('form')
  }


  const saveClient = (client: Client) => {
    console.log("Client", client)
  }

  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-l to-blue-500 from-purple-500  
    text-white 
    `}>
      <Layout title='Cadastro Simples'>
        {isVisible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button
                onClick={newClient}
                color='green'
                className='mb-4'
              >
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={mockClients}
              selectedClient={selectedClient}
              delectedClient={delectedClient}
            />
          </>
        ) : (
          <Form
            cancel={() => setIsVisible('table')}
            changeClient={saveClient}
            client={client}
          />
        )

        }
      </Layout>
    </div>
  )
}

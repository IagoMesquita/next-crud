import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Client from '@/core/Client'
import Table from '@/components/Table'
import Button from '@/components/Button'
import Form from '@/components/Form'
import { useEffect, useState } from 'react'
import { ClientRepository } from '@/core/ClientRepository'
import ClientCollection from '@/backend/db/ClientCollection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const repoClients: ClientRepository = new ClientCollection()

  const [clients, setClients] = useState<Client[]>([])
  const [client, setClient] = useState<Client>(Client.empty)
  const [isVisible, setIsVisible] = useState<'table' | 'form'>('table')

  // useEffect(() => {
  //   repoClients.getAll().then(setClients)
  //   console.log(clients)
  // }, [])
  
  useEffect(getClients, [])

  function getClients() {
    repoClients.getAll().then((clients) => {
      setClients(clients)
      setIsVisible('table')
    });
  }

  const saveClient = async (client: Client) => {
    await repoClients.save(client)
    getClients()
  }

  const delectedClient = async (client: Client) => {
    await repoClients.delete(client)
    getClients()
  }

  const selectedClient = (client: Client) => {
    setClient(client)
    setIsVisible('form')
  }


  const newClient = () => {
    setClient(Client.empty())
    setIsVisible('form')
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
              clients={clients}
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

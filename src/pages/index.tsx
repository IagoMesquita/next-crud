import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Button from '@/components/Button'
import Form from '@/components/Form'

import useClients from '@/hooks/useClients'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {
    client,
    clients,
    newClient,
    selectedClient,
    delectedClient,
    saveClient,
    visibleTable,
    displayTable
  } = useClients()



  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-l to-blue-500 from-purple-500  
    text-white 
    `}>
      <Layout title='Cadastro Simples'>
        {visibleTable ? (
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
            cancel={displayTable}
            changeClient={saveClient}
            client={client}
          />
        )

        }
      </Layout>
    </div>
  )
}

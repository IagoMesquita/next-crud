import Client from "@/core/Client"
import { IconEdit, IconTrash } from "./Icons"

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  delectedClient?: (client: Client) => void
}


export default function Table(props: TableProps) {

  const isShowActive = props.selectedClient || props.delectedClient

  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {isShowActive &&
          <th className="p-4">Ação</th>
        }
      </tr>
    )
  }

  const renderActions = (client: Client) => {
    return (
      <td className="flex justify-center items-center">
        {props.selectedClient &&
          <button
            onClick={() => props.selectedClient?.(client)}
            className={`
            text-green-600 p-2 m-1 rounded-full
            hover:bg-purple-50
            `}>
            {IconEdit}
          </button>
        }
        {props.delectedClient &&
          <button
            onClick={() => props.delectedClient?.(client)}
            className={`
            text-red-500 p-2 m-1 rounded-full
            hover:bg-purple-50
            `}>
            {IconTrash}
          </button>
        }

      </td>
    )
  }

  const renderData = () => {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id} className={`
         ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}  
        `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {isShowActive && renderActions(client)}
        </tr>
      )
    })
  }


  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100 
        bg-gradient-to-l to-purple-500 from-purple-800
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}

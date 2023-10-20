import Client from "@/core/Client"

interface TableProps {
  clients: Client[]
}


export default function Table(props: TableProps) {

  const renderHeader = () => {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  const renderData = () => {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}

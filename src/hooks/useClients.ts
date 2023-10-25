import ClientCollection from "@/backend/db/ClientCollection";
import Client from "@/core/Client";
import { ClientRepository } from "@/core/ClientRepository";
import { useEffect, useState } from "react";
import useTableOrForm from "./useTableOrForm";

export default function useClients() {

  const { displayTable, displayForm, visibleTable } = useTableOrForm()

  const repoClients: ClientRepository = new ClientCollection();

  const [clients, setClients] = useState<Client[]>([]);
  const [client, setClient] = useState<Client>(Client.empty);
 

  // useEffect(() => {
  //   repoClients.getAll().then(setClients)
  //   console.log(clients)
  // }, [])

  useEffect(getClients, []);

  function getClients() {
    repoClients.getAll().then((clients) => {
      setClients(clients);
      displayTable()
    });
  }

  const saveClient = async (client: Client) => {
    await repoClients.save(client);
    getClients();
  };

  const delectedClient = async (client: Client) => {
    await repoClients.delete(client);
    getClients();
  };

  const selectedClient = (client: Client) => {
    setClient(client);
    displayForm()
  };

  const newClient = () => {
    setClient(Client.empty());
    displayForm()
  };

  return {
    client,
    clients,
    newClient,
    selectedClient,
    delectedClient,
    saveClient,
    getClients,
    visibleTable,
    displayTable
  };
}

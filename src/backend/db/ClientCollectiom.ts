import Client from "@/core/Client";
import { ClientRepository } from "@/core/ClientRepository";
import firebase from '@/backend/config'

export default class ClientCollection implements ClientRepository {

  #clientConverter = {
    toFirestore(client: Client){
      return {
        name: client.name,
        age: client.age,
      }
    },

    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot, options: 
      firebase.firestore.SnapshotOptions
    ): Client {
      const data = snapshot.data(options)!;
      return new Client(data.name, data.age, snapshot.id)
    }

  }


  async save(client: Client): Promise<Client> {

  }

  async delete(client: Client): Promise<void> {
    
  }

  async getAll(client: Client): Promise<Client[]> {
    
  }

  #collection() {
    return  firebase.firestore()
    .collection('clients')
    .withConverter(this.#clientConverter)
    .doc().get();
  }
}
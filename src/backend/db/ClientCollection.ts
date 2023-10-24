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
    if(client?.id){
      await this.#clientsCollection().doc(client.id).set(client)
      return client
    } else {
     const docRef = await this.#clientsCollection().add(client)
     const doc = await docRef.get()

     return doc.data()!
    }
  }

  async delete(client: Client): Promise<void> {
    return this.#clientsCollection().doc(client.id!).delete()
  }

  async getAll(): Promise<Client[]> {
    const querySnapshot = await this.#clientsCollection().get()
    return querySnapshot.docs.map((doc) => doc.data()) ?? []
  }

  #clientsCollection() {
    return  firebase.firestore()
    .collection('clients')
    .withConverter(this.#clientConverter)
  }
}
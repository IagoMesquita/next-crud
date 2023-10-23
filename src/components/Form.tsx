import Client from "@/core/Client";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

interface FormProps {
  client: Client
  changeClient?: (client: Client) => void
  cancel?: () => void
}

export default function Form(props: FormProps) {
  const id = props.client?.id
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? '')

  return (
    <div>
      {id ? (
        <Input
          text="Código"
          value={id}
          type="text"
          onlyReading
          className="mb-4"
        />
      ) : false}
      <Input
        text="Nome"
        value={name}
        onChange={setName}
        type="text"
        className="mb-4"
      />
      <Input
        text="Idade"
        value={age}
        onChange={setAge}
        type="number"
      />
      <div className="mt-7 flex justify-end">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.changeClient?.(new Client(name, +age, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.cancel} >
          Cancelar
        </Button>
      </div>
    </div>
  )
}

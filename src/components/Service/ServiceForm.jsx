import { useState } from "react"
import Input from "../form/Input"
import Button from "../form/Button"

import styles from "../CSS/projectform.module.css"

export function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({})

  function submit(e) {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }
  return (
    <form
      autoComplete="off"
      onSubmit={submit}
      className={styles.project_content}
    >
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        onChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        onChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        onChange={handleChange}
      />
      <Button text={btnText} />
    </form>
  )
}

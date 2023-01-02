import styles from "../CSS/projectform.module.css"
import Input from "../form/Input"
import Select from "../form/Select"
import Button from "../form/Button"
import { Message } from "../Layout/Message"

import { useState, useEffect } from "react"
import axios from "axios"

export default function ProjectForm({
  handleSubmit,
  btn_text,
  projectData,
  FormCustomClass,
}) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})
  const [redToast, setRedToast] = useState(false)
  const [messageError, setMessageError] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:5050/categories")
      .then(({ data }) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  function inputValidate() {
    if (!project.name || !project.budget || !project.category) {
      setRedToast(true)
      return false
    }
    return true
  }

  function noSub(e) {
    e.preventDefault()
    const isValid = inputValidate()
    if (!project.category) setMessageError("Selecione uma categoria!")
    if (!project.budget) setMessageError("Orçamento de projeto é inválido!")
    if (!project.name) setMessageError("Nome de projeto é inválido!")

    if (!isValid) return
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleSelect(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form
      onSubmit={noSub}
      className={`${styles.project_container} ${styles[FormCustomClass]}`}
      autoComplete="off"
    >
      {redToast && (
        <Message
          showToast={redToast}
          setShowToast={setRedToast}
          type="error"
          msg={messageError}
        />
      )}
      <div className={styles.project_inputs}>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
          value={project.name}
          onChange={handleChange}
        />

        <Input
          inputMode="numeric"
          pattern="[0-9]*"
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
          value={project.budget}
          onChange={handleChange}
        />
      </div>

      <div className={styles.project_options}>
        <Select
          onChange={handleSelect}
          options={categories}
          name="category_id"
          value={project.category ? project?.category?.id : "0"}
        />
        <Button text={btn_text} nameClass={styles.noSub} />
      </div>
    </form>
  )
}

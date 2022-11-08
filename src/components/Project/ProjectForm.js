import styles from "../CSS/projectform.module.css"
import Input from "../form/Input"
import Select from "../form/Select"
import Button from "../form/Button"

import { useState, useEffect } from "react"
import axios from "axios"

export default function ProjectForm({ handleSubmit, btn_text, projectData }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    axios
      .get("http://localhost:5050/categories")
      .then(({ data }) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  function noSub(e) {
    e.preventDefault()
    handleSubmit(project)
    console.log(project)
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
      className={styles.project_container}
      autoComplete="off"
    >
      <div className={styles.project_inputs}>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
          onChange={handleChange}
        />
        <Input
          inputMode="numeric"
          pattern="[0-9]*"
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
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

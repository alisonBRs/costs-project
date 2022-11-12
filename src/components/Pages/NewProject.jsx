import ProjectForm from "../Project/ProjectForm"
import styles from "../CSS/newProject.module.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function NewProject({ setShow }) {
  const navigate = useNavigate()

  function createPost(project) {
    project.cost = 0
    project.service = []

    axios
      .post("http://localhost:5050/projects", project)
      .then(() => {
        setShow(true)
        navigate("/projects")
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className={styles.newProject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjectForm handleSubmit={createPost} btn_text="Enviar projeto" />
    </div>
  )
}

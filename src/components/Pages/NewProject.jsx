import ProjectForm from "../Project/ProjectForm"
import styles from "../CSS/newProject.module.css"

export default function NewProject() {
  return (
    <div className={styles.newProject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjectForm btn_text="Enviar projeto" />
    </div>
  )
}

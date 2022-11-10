import Container from "../Layout/Container"
import { Link } from "react-router-dom"
import styles from "../CSS/projects.module.css"
import style from "../Layout/LinkButton.module.css"

export default function Projects() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>Meus Projetos</h1>
        <Link className={style.button} to="/NewProject">
          Novo projeto
        </Link>
      </div>

      <Container customClass="start">
        <p>projetos...</p>
        <p>projetos...</p>
      </Container>
    </div>
  )
}

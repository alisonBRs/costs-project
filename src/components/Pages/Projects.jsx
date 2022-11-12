import Container from "../Layout/Container"
import { Link } from "react-router-dom"
import styles from "../CSS/projects.module.css"
import style from "../Layout/LinkButton.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5050/projects")
      .then(({ data }) => {
        console.log(data)
        setProjects(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>Meus Projetos</h1>
        <Link className={style.button} to="/newproject">
          Novo projeto
        </Link>
      </div>

      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <div className={styles.card} key={project.id}>
              <h3>{project.name}</h3>
              <p>Orçamento: R${project.budget}</p>
              <p>{project.category.name}</p>
            </div>
          ))}
        <p>projetos...</p>
        <p>projetos...</p>
      </Container>
    </div>
  )
}

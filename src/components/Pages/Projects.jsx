import Container from "../Layout/Container"
import { Link } from "react-router-dom"
import { ProjectCard } from "../Project/ProjectCard"
import { Loading } from "../Layout/Loading"

import styles from "../CSS/projects.module.css"
import style from "../Layout/LinkButton.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:5050/projects")
        .then(({ data }) => {
          setProjects(data)
          setLoading(false)
        })
        .catch((err) => console.log(err))
    }, 2000)
  }, [])

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>Meus Projetos</h1>
        {projects.length === 0 ? (
          ""
        ) : (
          <Link className={style.button} to="/newproject">
            Novo projeto
          </Link>
        )}
      </div>

      <Container customClass={projects.length === 0 ? "center" : "start"}>
        {projects.length > 0 && projects
          ? projects.map((project) => (
              <ProjectCard
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
              />
            ))
          : !loading && (
              <div className={styles.no_project_card}>
                <p>Sem projetos no momento.</p>
                <Link className={style.button} to="/newproject">
                  Criar projeto
                </Link>
              </div>
            )}
        {loading && <Loading />}
      </Container>
    </div>
  )
}

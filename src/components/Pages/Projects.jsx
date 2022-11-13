import Container from "../Layout/Container"
import { Link } from "react-router-dom"
import { ProjectCard } from "../Project/ProjectCard"
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
        console.log(...data)
        setProjects(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>Meus Projetos</h1>
        {projects == "" ? (
          ""
        ) : (
          <Link className={style.button} to="/newproject">
            Novo projeto
          </Link>
        )}
      </div>

      <Container customClass={projects == "" ? "center" : "start"}>
        {projects.length > 0 && projects ? (
          projects?.map((project) => (
            <div className={styles.card} key={project.id}>
              <div className={styles.card_body}>
                <h3>{project.name}</h3>
                <p>
                  Orçamento: <span>R$</span>
                  {project.budget}
                </p>

                <div className={styles.flex_description}>
                  <div
                    className={`${styles.check_circle} ${
                      styles[project.category.name.toLowerCase()]
                    }`}
                  ></div>
                  <p>{project.category.name}</p>
                </div>
              </div>
              <ProjectCard />
            </div>
          ))
        ) : (
          <div className={styles.no_project_card}>
            <p>Sem projetos no momento.</p>
            <Link className={style.button} to="/newproject">
              Criar projeto
            </Link>
          </div>
        )}
      </Container>
    </div>
  )
}

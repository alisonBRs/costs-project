import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Loading } from "../Layout/Loading"
import ProjectForm from "../Project/ProjectForm"
import Container from "../Layout/Container"

import styles from "./project.module.css"
import style from "../form/button.module.css"

import axios from "axios"

export function Project() {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    axios
      .get(`http://localhost:5050/projects/${id}`)
      .then(({ data }) => {
        setProject(data)
      })
      .catch((err) => console.log(err))
  }, [id])
  function toggleProjectForm() {
    setToggle(!toggle)
  }

  function editPost(project) {
    console.log(project)
  }
  return (
    <>
      {project.name ? (
        <div className={styles.project_container}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <div className={styles.details_flex}>
                <h2>Projeto: {project.name}</h2>
                <button
                  className={`${style.btn} ${styles.btn_container}`}
                  onClick={toggleProjectForm}
                >
                  {toggle ? "Editar projeto" : "Fechar"}
                </button>
              </div>
              {toggle ? (
                <div className={styles.project_details}>
                  <p>
                    <span>Categoria: </span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Total de orçamento: </span>
                    R${Number(project.budget).toLocaleString("pt-br")}
                  </p>

                  <p>
                    <span>Total utilizado: </span>
                    R${Number(project.cost).toLocaleString("pt-br")}
                  </p>
                </div>
              ) : (
                <div>
                  <ProjectForm
                    handleSubmit={editPost}
                    btn_text="Concluir Edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

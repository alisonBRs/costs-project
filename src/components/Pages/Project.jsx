import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Loading } from "../Layout/Loading"
import Container from "../Layout/Container"
import styles from "./project.module.css"
import axios from "axios"

export function Project() {
  const { id } = useParams()
  const [project, setProject] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:5050/projects/${id}`)
      .then(({ data }) => {
        console.log(data)
        setProject(data)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <>
      {project.name ? (
        <div className={styles.project_container}>
          <Container customClass="column">
            <h1>Projeto: {project.name}</h1>
            <button>Editar projeto</button>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

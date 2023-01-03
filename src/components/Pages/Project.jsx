import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Loading } from "../Layout/Loading"
import { Message } from "../Layout/Message"
import ProjectForm from "../Project/ProjectForm"
import Container from "../Layout/Container"

import styles from "./project.module.css"
import style from "../form/button.module.css"

import axios from "axios"

export function Project() {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [toggle, setToggle] = useState(false)
  const [showServiceForm, setshowServiceForm] = useState(false)
  const [message, setMessage] = useState()
  const [errorMessage, setErrorMessage] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [type, setType] = useState()

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

  function toggleServiceForm() {
    setshowServiceForm(!showServiceForm)
  }

  function editPost(project) {
    if (project.budget < project.cost) {
      setType("error")
      setMessage("Orçamento do projeto insuficiente!")
      setShowMessage(true)
      return false
    }

    axios
      .patch(`http://localhost:5050/projects/${project.id}`, project)
      .then(({ data }) => {
        setProject(data)
        setToggle(!toggle)
        setMessage("Projeto atualizado com sucesso!")
        setType("success")
        setErrorMessage(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_container}>
          <div className={styles.project_content}>
            {message && (
              <Message
                showToast={showMessage}
                setShowToast={setShowMessage}
                msg={message}
                type={type}
              />
            )}

            {!editPost && (
              <Message
                showToast={errorMessage}
                setShowToast={setErrorMessage}
                msg={message}
                type={type}
              />
            )}
            <div className={styles.details_container}>
              <div className={styles.details_flex}>
                <h2>Projeto: {project.name}</h2>
                <button
                  className={`${style.btn} ${styles.btn_container}`}
                  onClick={toggleProjectForm}
                >
                  {!toggle ? "Editar projeto" : "Fechar"}
                </button>
              </div>
              {!toggle ? (
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
                <ProjectForm
                  handleSubmit={editPost}
                  btn_text="Concluir Edição"
                  projectData={project}
                  FormCustomClass="alternative_form_container"
                />
              )}
            </div>
            <div className={styles.service_form_container}>
              <div className={styles.service_details}>
                <h2>Adicione um serviço:</h2>
                <button
                  className={`${style.btn} ${styles.btn_container}`}
                  onClick={toggleServiceForm}
                >
                  {!showServiceForm ? "Adicionar serviço" : "Fechar"}
                </button>
              </div>
              {showServiceForm && <p>Formulário do serviço.</p>}
            </div>

            <h2>Serviços</h2>
            <Container customClass="start">
              <p>Itens de serviço</p>
            </Container>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

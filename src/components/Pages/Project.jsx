import { parse, v4 as uuidv4 } from "uuid"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Loading } from "../Layout/Loading"
import { Message } from "../Layout/Message"
import ProjectForm from "../Project/ProjectForm"
import Container from "../Layout/Container"
import { ServiceForm } from "../Service/ServiceForm"
import styles from "./project.module.css"
import style from "../form/button.module.css"

import axios from "axios"

export function Project() {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [services, setServices] = useState([])
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
        setServices(data.services)
        console.log(services)
      })
      .catch((err) => console.log(err))
  }, [id])

  function toggleProjectForm() {
    setToggle(!toggle)
  }

  function toggleServiceForm() {
    setshowServiceForm(!showServiceForm)
  }

  function createService(project) {
    const lastService = project.services[project.services.length - 1]
    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = Number(project.cost) + Number(lastServiceCost)

    if (newCost > Number(project.budget)) {
      setMessage("Orçamento ultrapassado. Verifique o valor do serviço!")
      setType("error")
      setShowMessage(true)
      project.services.pop()
      return false
    }
    setshowServiceForm(!showServiceForm)

    setMessage("Serviço adicionado com sucesso!")
    setType("success")

    project.cost = project.cost + Number(lastServiceCost)

    axios
      .patch(`http://localhost:5050/projects/${project.id}`, project)
      .then(({ data }) => {})
      .catch((err) => console.log(err))
  }

  function editPost(project) {
    if (project.budget < project.cost) {
      setType("error")
      setMessage("Orçamento do projeto insuficiente!")
      return false
    }

    axios
      .patch(`http://localhost:5050/projects/${project.id}`, project)
      .then(({ data }) => {
        setShowMessage(true)
        setProject(data)
        setToggle(!toggle)
        setMessage("Projeto atualizado com sucesso!")
        setType("success")
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
                  {!toggle ? "Editar projeto" : "Cancelar"}
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
                  {!showServiceForm ? "Adicionar serviço" : "Cancelar"}
                </button>
              </div>
              {showServiceForm && (
                <ServiceForm
                  btnText="Adicionar serviço"
                  projectData={project}
                  handleSubmit={createService}
                />
              )}
            </div>

            <h2>Serviços</h2>
            <Container customClass="start">
              {services.length > 0 ? (
                <p>teste</p>
              ) : (
                <p>Não há serviços cadastrados.</p>
              )}
            </Container>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

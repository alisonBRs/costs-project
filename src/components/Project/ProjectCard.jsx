import styles from "./projectCard.module.css"
import style from "../CSS/projects.module.css"
import { Link } from "react-router-dom"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

export function ProjectCard({ id, name, budget, category, handleRemove }) {
  function remove(e) {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <>
      <div className={style.card}>
        <div className={style.card_body}>
          <h3>{name}</h3>
          <p>
            <span className={style.P_bold}>Orçamento: </span>
            <span>R$</span>
            {parseInt(budget).toLocaleString("pt-br")}
          </p>

          <div className={style.flex_description}>
            <div
              className={`${style.check_circle} ${
                style[category.toLowerCase()]
              }`}
            ></div>
            <p>{category}</p>
          </div>
        </div>

        <div className={styles.btn_container}>
          <Link to={`/project/${id}`} className={styles.edit}>
            <BsPencil />
            <p>Editar</p>
          </Link>

          <button onClick={remove} className={styles.trash}>
            <BsFillTrashFill />
            <p>Excluir</p>
          </button>
        </div>
      </div>
    </>
  )
}

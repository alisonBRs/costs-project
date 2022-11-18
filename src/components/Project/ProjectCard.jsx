import styles from "./projectCard.module.css"
import style from "../CSS/projects.module.css"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

export function ProjectCard({ id, name, budget, category, handleRemove }) {
  return (
    <>
      <div className={style.card} key={id}>
        <div className={style.card_body}>
          <h3>{name}</h3>
          <p>
            <span className={style.P_bold}>Orçamento: </span>
            <span>R$</span>
            {budget}
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
          <div className={styles.edit}>
            <BsPencil />
            <p>Editar</p>
          </div>

          <div className={styles.trash}>
            <BsFillTrashFill />
            <p>Excluir</p>
          </div>
        </div>
      </div>
    </>
  )
}

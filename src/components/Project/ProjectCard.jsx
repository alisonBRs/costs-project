import styles from "./projectCard.module.css"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

export function ProjectCard() {
  return (
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
  )
}

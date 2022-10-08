import styles from "./LinkButton.module.css"
import { Link } from "react-router-dom"
export default function LinkButton({ text, to }) {
  return (
    <Link className={styles.button} to={to}>
      {text}
    </Link>
  )
}

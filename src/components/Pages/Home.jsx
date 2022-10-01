import styles from "../CSS/home.module.css"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <p>home</p>

      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}></div>
          <div className={styles.footer}></div>
        </div>
        <Link to="/NewProject">Criar novo projeto</Link>
      </div>
    </>
  )
}

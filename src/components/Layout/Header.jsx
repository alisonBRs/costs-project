import { Link } from "react-router-dom"
import styles from "./header.module.css"
import logo from "../../img/costs_logo.png"

export default function header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <nav>
        <ul className={styles.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/company">Empresa</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

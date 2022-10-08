import { FiFacebook, FiInstagram, FiTwitch } from "react-icons/fi"
import { Link } from "react-router-dom"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <h1>
          <Link to="/">
            <span>C</span>osts &trade;
          </Link>
        </h1>
        <p>Todos os direitos reservados. &copy;2022</p>
      </div>

      <div className={styles.contacts}>
        <div className={styles.icon}>
          <FiFacebook />
          <p>Facebook</p>
        </div>

        <div className={styles.icon}>
          <FiInstagram />
          <p>Instagram</p>
        </div>

        <div className={styles.icon}>
          <FiTwitch />
          <p>Twitch</p>
        </div>
      </div>
    </div>
  )
}

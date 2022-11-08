import styles from "../CSS/home.module.css"
import bg_img from "../../img/savings.svg"
import LinkButton from "../Layout/LinkButton"

export default function Home() {
  return (
    <section className={styles.main_home}>
      <div className={styles.wellcome}>
        <h3>
          Bem-vindo ao <span>Costs</span>
        </h3>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>

      <div className={styles.bg_img}>
        <img src={bg_img} alt="bg_img" />
      </div>
    </section>
  )
}

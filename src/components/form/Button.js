import styles from "./button.module.css"

export default function Button({ text }) {
  return (
    <div className={styles.btn_container}>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

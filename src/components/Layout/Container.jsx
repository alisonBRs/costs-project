import styles from "./container.module.css"

export default function Container({
  customAlternativeClass,
  customClass,
  children,
}) {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  )
}

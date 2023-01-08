import styles from "./ServiceCard.module.css"

export function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  }

  return (
    <div className={styles.ServiceCard_content}>
      <div className={styles.service_description}>
        <h4>{name}</h4>
        <p>
          <strong>Custo:</strong> R${Number(cost).toLocaleString("pt-br")}
        </p>
        <p>
          <strong>Descrição:</strong> {description}
        </p>
      </div>
      <button onClick={remove}>Remover</button>
    </div>
  )
}

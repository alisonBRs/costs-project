import styles from "./ServiceCard.module.css"

export function ServiceCard({ name, cost, description }) {
  return (
    <div className={styles.ServiceCard_content}>
      <h4>Nome do serviço: {name}</h4>
      <p>Custo: R${Number(cost).toLocaleString("pt-br")}</p>
      <p>Descrição: {description}</p>
      <button>Deletar</button>
    </div>
  )
}

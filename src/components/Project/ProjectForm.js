import styles from "../CSS/projectform.module.css"
import Input from "../form/Input"
import Select from "../form/Select"
import Button from "../form/Button"

export default function ProjectForm({ btn_text }) {
  function noSub(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={noSub} className={styles.project_container}>
      <div className={styles.project_inputs}>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
        <Input
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        />
      </div>

      <div className={styles.project_options}>
        <Select text="Selecione a categoria" name="category_id" />
        <Button text={btn_text} nameClass={styles.noSub} />
      </div>
    </form>
  )
}

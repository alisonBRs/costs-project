import styles from "./select.module.css"
export default function Select({ name, options, onChange, value }) {
  return (
    <div className={styles.form_control}>
      <select name={name} id={name} onChange={onChange} value={value || "0"}>
        <option>Selecione a categoria</option>
        {options?.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

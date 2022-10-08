import styles from "./select.module.css"
export default function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <select name={name} id={name}>
        <option value={value}>{text}</option>
      </select>
    </div>
  )
}

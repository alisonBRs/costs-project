import styles from "./input.module.css"

export default function Input({
  type,
  text,
  name,
  placeholder,
  value,
  handleOnChange,
}) {
  return (
    <div className={styles.input_style}>
      <label htmlFor={name}>{text}: </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  )
}

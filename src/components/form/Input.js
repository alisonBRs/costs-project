import styles from "./input.module.css"

export default function Input(props) {
  const { name } = props
  return (
    <div className={styles.input_style}>
      <label htmlFor={name}>{props.text}: </label>
      <input name={name} id={name} {...props} />
    </div>
  )
}

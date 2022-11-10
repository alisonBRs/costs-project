import styles from "../Layout/message.module.css"
import { useState, useEffect } from "react"
import { FiX } from "react-icons/fi"

export function Message({ type, msg }) {
  const [visible, setVisible] = useState(false)
  if (!type) {
    type = "success"
  }

  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [msg])

  function timerIsOver() {
    setVisible(false)

    return
  }
  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>
          {msg}
          <FiX onClick={timerIsOver} />
        </div>
      )}
    </>
  )
}

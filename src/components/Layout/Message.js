import styles from "../Layout/message.module.css"
import { useEffect } from "react"
import { FiX } from "react-icons/fi"

export function Message({ type, msg, showToast, setShowToast }) {
  if (!type) {
    type = "success"
  }

  useEffect(() => {
    if (!msg) {
      setShowToast(false)
      return
    }

    setShowToast(true)

    const timer = setTimeout(() => {
      setShowToast(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [msg])

  function timerIsOver() {
    return setShowToast(false)
  }
  return (
    <>
      {showToast && (
        <div className={`${styles.message} ${styles[type]}`}>
          {msg}
          <FiX onClick={timerIsOver} />
        </div>
      )}
    </>
  )
}

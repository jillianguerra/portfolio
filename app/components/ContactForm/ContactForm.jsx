import { useState } from "react";
import styles from "./ContactForm.module.css"

export default function ContactForm({ saveContact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: ""
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    saveContact(formData.name, formData.email, formData.message);
  }
  return (
      <form onSubmit={handleSubmit} className={styles.ContactForm}>
        <label className="label-name">Name: </label>
        <input
          name="name"
          type="text"
          className={styles.inputName}
          onChange={handleChange}
          value={formData.name}
        />
        <label className={styles.labelEmail}>Email: </label>
        <input
          name="email"
          type="email"
          className={styles.inputEmail}
          onChange={handleChange}
          value={formData.email}
        />
        <label className={styles.labelMessage}> Message: </label>
        <textarea
          name="message"
          className={styles.message}
          rows="5"
          cols="36"
          onChange={handleChange}
          value={formData.message}
        />
        <input className={styles.inputSubmit} type="submit" value="Submit" />
      </form>
  )
}

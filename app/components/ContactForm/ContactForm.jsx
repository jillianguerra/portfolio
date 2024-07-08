import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from "./ContactForm.module.css"

export default function ContactForm( {saveContact}) {
  const form = useRef()
  // const [formData, setFormData] = useState({
  //       name: "",
  //       email: "",
  //       message: "",
  //       date: ""
  //     })
  //   const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // }
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_yzwdrpf', 'template_0s8jce2', form.current, 'crRrXaxj2fyS6g7h9')
    .then((result) => {
      //saveContact(formData)
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
      console.log(form.current)
    })
  }


  return (
    <form ref={form} onSubmit={handleSubmit} className={styles.ContactForm}>
      <label className={styles.labelName}>Name:</label>
      <input 
        type="text"
        name="name" 
        className={styles.inputName}
       // onChange={handleChange}
        // value={formData.name}
        />
      <label className={styles.labelEmail}>Email:</label>
      <input 
        type="email"
        name="email"
       // onChange={handleChange}
       // value={formData.email}
        />
      <label className={styles.labelMessage}>Message:</label>
      <textarea 
        name="message"
        className={styles.inputMessage}
       // onChange={handleChange}
       // value={formData.message}
        />
      <input 
        type="submit" 
        value="Send" 
        className={styles.inputSubmit}
        />
    </form>
  )
}

// import { useState, useRef } from "react";
// import styles from "./ContactForm.module.css"

// export default function ContactForm({ saveContact }) {
//   const form = useRef()
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     date: ""
//   })
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     saveContact(form.current);
//   }
//   return (
//       <form ref={form} onSubmit={handleSubmit} className={styles.ContactForm}>
//         <label className={styles.labelName}>Name: </label>
//         <input
//           name="name"
//           type="text"
//           className={styles.inputName}
//           onChange={handleChange}
//           value={formData.name}
//         />
//         <label className={styles.labelEmail}>Email: </label>
//         <input
//           name="email"
//           type="email"
//           className={styles.inputEmail}
//           onChange={handleChange}
//           value={formData.email}
//         />
//         <label className={styles.labelMessage}> Message: </label>
//         <textarea
//           name="message"
//           className={styles.message}
//           rows="5"
//           cols="36"
//           onChange={handleChange}
//           value={formData.message}
//         />
//         <input className={styles.inputSubmit} type="submit" value="Submit" />
//       </form>
//   )
// }

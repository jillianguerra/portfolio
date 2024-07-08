import { useState } from "react"
// import emailjs from '@emailjs/browser'
import ContactForm from "../../components/ContactForm/ContactForm"
import ResumeLink from "../../components/ResumeLink/ResumeLink"
import AboutMe from "../../components/AboutMe/AboutMe"
import PortfolioLinks from "../../components/PortfolioLinks/PortfolioLinks"
import styles from "./App.module.css"

export default function App() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: ""
  });
  const saveContact = async (name, email, message) => {
    try {
      setContactInfo({ name: name, email: email, message: message });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.App}>
      <nav>
        <ResumeLink /> 
      </nav>
      <header>
        <h1>Jillian Guerra</h1>
        <h2>Software Engineer</h2>
      </header>
      <aside>
        <AboutMe />
      </aside>
      <main>
      <PortfolioLinks />
      </main>
      <footer>
        {contactInfo && contactInfo.email ? (
          <div className={styles.thanks}>Thank you for reaching out, {contactInfo.name}!</div>
        ) : (
          <ContactForm saveContact={saveContact} />
        )}
      </footer>
    </div>
  );
}

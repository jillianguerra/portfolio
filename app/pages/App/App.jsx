import { useState } from "react"
// import emailjs from '@emailjs/browser'
import ContactForm from "../../components/ContactForm/ContactForm"
import ResumeLink from "../../components/ResumeLink/ResumeLink"
import AboutMe from "../../components/AboutMe/AboutMe"
import PortfolioLinks from "../../components/PortfolioLinks/PortfolioLinks"
import styles from "./App.module.css"

export default function App() {
  const [contactInfo, setContactInfo] = useState({ name: "" });
  const saveContact = async (data) => {
    try {
      setContactInfo({ name: data.name });
      console.log(contactInfo)
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
        {contactInfo && contactInfo.name ? (
          <div className={styles.thanks}>Thank you for reaching out, {contactInfo.name}!</div>
        ) : (
          <ContactForm saveContact={saveContact} />
        )}
      </footer>
    </div>
  );
}

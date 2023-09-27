import styles from "./ResumeLink.module.css"
export default function Resume() {
  return (
    <div className={styles.ResumeLink}>
      <a href="https://drive.google.com/file/d/1XaR15yuI2O7VDYcNUJwoBsOWGIoAKFYo/view?usp=sharing">
        Resume
      </a>
      <a href="https://github.com/jillianguerra">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/guerrajilliant/">
        LinkedIn
      </a>
    </div>
  );
}

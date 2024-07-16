import styles from "./AboutMe.module.css"
export default function PortfolioLinks() {
    return (
        <div className={styles.AboutMe}>
            <h3>About Me</h3>
            <div className={styles.message}>
                Educator turned engineer who thrives on solving complex problems. From dry code in the backend to dazzling designs in the front end, I methodically build applications that are both practical and user-friendly.
            </div>
            <h3>Languages</h3>
            <div className={styles.container}>
                <div>JavaScript</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>SCSS</div>
                <div>GoLang</div>
            </div>
            <h3>Frameworks</h3>
            <div className={styles.container}>
                <div>Express</div>
                <div>Node.js</div>
                <div>React</div>
                <div>Mongoose</div>
            </div>
            <h3>Databases</h3>
            <div className={styles.container}>
                <div>Mongo DB</div>
            </div>
            <h3>Tools</h3>
            <div className={styles.container}>
                <div>Remix</div>
                <div>Gatsby</div>
                <div>Visual Code Studio</div>
                <div>Repl.it</div>
                <div>CodeSandbox.io</div>
            </div>
        </div>
    );
}
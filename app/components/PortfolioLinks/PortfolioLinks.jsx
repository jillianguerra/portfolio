import styles from "./PortfolioLinks.module.css"
export default function PortfolioLinks() {
    return (
      <div className={styles.PortfolioLinks}>
        <h2>Works</h2>
        <div className={styles.list}>
          <a href="https://pokemoncafe.jillianguerra.me">Pokemon Cafe</a>
          <div>
            A cafe that lets users buy and rate Pokemon.
          </div>
          <a className={styles.github} href="https://github.com/jillianguerra/mern-cafe">GitHub</a>
          
        </div>
        <div className={styles.list}>
          <a  href="https://buckets-and-beyond.tech/">Buckets and Beyond</a>
          <div>
            A knock-off Home Depot website. Users can rate products, add products
            to wishlist, and buy products.
          </div>
          <a className={styles.github} href="https://github.com/jillianguerra/home-depot">GitHub</a>
        </div>
        <div className={styles.list}>
            <a href="https://vocabulary-builder.jillianguerra.me">Vocabulary Builder</a>
          <div>
            A vocabulary building app that grabs words from a dictionary API, and, with a click of a button, puts those words into a list. Perfect for students.
          </div>
          <a className={styles.github} href="https://github.com/jillianguerra/vocabulary-builder">GitHub</a>
        </div>
      </div>
    );
  }
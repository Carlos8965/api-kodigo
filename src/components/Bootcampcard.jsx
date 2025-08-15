import styles from "./Bootcampcard.module.css";

const Bootcampcard = ({ title, description, image }) => (
  <div className={styles.card}>
    <img src={image} alt={title} className={styles.image} />
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

export default Bootcampcard;
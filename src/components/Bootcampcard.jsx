import styles from "./Bootcampcard.module.css";

const Bootcampcard = ({ title, description, image, content }) => (
  <div className={styles.card}>
    <img src={image} alt={title} className={styles.image} />
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {Array.isArray(content) && content.length > 0 && (
        <ul className={styles.contentList}>
          {content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default Bootcampcard;
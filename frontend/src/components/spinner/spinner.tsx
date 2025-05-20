import styles from "./spinner.module.css";

const Spinner = ({ size = "medium" }) => {
  const spinnerClass = `${styles.spinner} ${styles[size]}`;

  return (
    <div className={styles.container}>
      <div className={spinnerClass}></div>
    </div>
  );
};

export default Spinner;

import Link from "next/link";
import styles from "./Button.module.css";

function Button({ children, link }) {
  if (link) {
    return (
      <button className={styles.Button}>
        <Link href={link}>{children}</Link>
      </button>
    );
  }
  return <button className={styles.Button}>{children}</button>;
}

export default Button;

import Image from "next/image";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.Logo}>
      <div className={styles.imgContainer}>
        <Image
          src={"/earnest-logo.jpg"}
          alt="earnest-logo"
          width={100}
          height={100}
        ></Image>
      </div>
      <h1>Earnest</h1>
    </div>
  );
}

export default Logo;

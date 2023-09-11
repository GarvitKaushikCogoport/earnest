import Button from "@/components/Button";
import styles from "./index.module.css";
import Image from "next/image";

function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <h1>A trustless escrow solution for financial deals...</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            ipsum deserunt possimus velit!
          </h3>
          <div className={styles.buttons}>
            <Button type="blue">Signup</Button>
            <Button type="white">Login</Button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/laptop.jpg"
            alt="Laptop"
            width={500}
            height={500}
          ></Image>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}

export default HomePage;

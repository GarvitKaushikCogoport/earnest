import Button from "@/components/Button";

import styles from "./index.module.css";
import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.textContainer}>
            <h1>
              A trustless escrow <br /> solution for financial deals...
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
              <br></br>
              Incidunt ipsum deserunt possimus velit!
            </p>
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

        <section className={styles.featuredCompanies}>
          <h2>Earnest has been featured on</h2>
          <div className={styles.featuredCompanies__slide}>
            <div className={styles.featuredCompanies__slide__elm}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5205 23.1585C12.5537 24.1087 10.9828 24.1101 10.0142 23.1614L0.726389 14.0651C-0.24222 13.1165 -0.240847 11.5781 0.72941 10.631L10.0172 1.56588C10.9851 0.62118 12.5513 0.622494 13.5175 1.56882L22.7735 10.634C23.7398 11.5803 23.7411 13.1142 22.7765 14.0621L13.5205 23.1585Z"
                  fill="white"
                />
              </svg>

              <h3>Mudrex</h3>
            </div>

            <div className={styles.featuredCompanies__slide__elm}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5205 23.1585C12.5537 24.1087 10.9828 24.1101 10.0142 23.1614L0.726389 14.0651C-0.24222 13.1165 -0.240847 11.5781 0.72941 10.631L10.0172 1.56588C10.9851 0.62118 12.5513 0.622494 13.5175 1.56882L22.7735 10.634C23.7398 11.5803 23.7411 13.1142 22.7765 14.0621L13.5205 23.1585Z"
                  fill="white"
                />
              </svg>

              <h3>Mudrex</h3>
            </div>

            <div className={styles.featuredCompanies__slide__elm}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5205 23.1585C12.5537 24.1087 10.9828 24.1101 10.0142 23.1614L0.726389 14.0651C-0.24222 13.1165 -0.240847 11.5781 0.72941 10.631L10.0172 1.56588C10.9851 0.62118 12.5513 0.622494 13.5175 1.56882L22.7735 10.634C23.7398 11.5803 23.7411 13.1142 22.7765 14.0621L13.5205 23.1585Z"
                  fill="white"
                />
              </svg>

              <h3>Mudrex</h3>
            </div>

            <div className={styles.featuredCompanies__slide__elm}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5205 23.1585C12.5537 24.1087 10.9828 24.1101 10.0142 23.1614L0.726389 14.0651C-0.24222 13.1165 -0.240847 11.5781 0.72941 10.631L10.0172 1.56588C10.9851 0.62118 12.5513 0.622494 13.5175 1.56882L22.7735 10.634C23.7398 11.5803 23.7411 13.1142 22.7765 14.0621L13.5205 23.1585Z"
                  fill="white"
                />
              </svg>

              <h3>Mudrex</h3>
            </div>
          </div>
        </section>

        <section className={styles.buildProfile}>
          <div className={styles.buildProfile__heading}>
            <h1>Build Your crypt profile</h1>
            <h3>
              Lorem ipsum dolor sit amet cons elit.
              <br /> Enim sit, sequi dsfl fdkeio
            </h3>
          </div>

          <div className={styles.buildProfile__grid}>
            <div className={styles.buildProfile__mobile}>
              <div className={styles.mobileText}>
                <h3>ios & android app</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  voluptas officia quas debitis quibusdam quis per
                </p>
              </div>

              <div className={styles.mobileContainer}>
                <Image
                  src={"/mobile.png"}
                  alt="mobile"
                  height={300}
                  width={300}
                ></Image>
              </div>
            </div>

            <div className={styles.buildProfile__card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <h3>Send & recieve</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                id perspiciatis cum facilis enim autem fuga quo eum accusamus,
                officia expedita eligendi architecto
              </p>
            </div>

            <div className={styles.buildProfile__card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <h3>Send & recieve</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                id perspiciatis cum facilis enim autem fuga quo eum accusamus,
                officia expedita eligendi architecto
              </p>
            </div>
            <div className={styles.buildProfile__card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <h3>Send & recieve</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                id perspiciatis cum facilis enim autem fuga quo eum accusamus,
                officia expedita eligendi architecto
              </p>
            </div>
            <div className={styles.buildProfile__card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <h3>Send & recieve</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                id perspiciatis cum facilis enim autem fuga quo eum accusamus,
                officia expedita eligendi architecto
              </p>
            </div>
          </div>
          <Button>Download App</Button>
        </section>
      </main>
    </>
  );
}

export default HomePage;

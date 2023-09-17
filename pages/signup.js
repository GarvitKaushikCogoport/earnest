import Button from "@/components/Button";
import styles from "./signup.module.css";

function signup() {
  return (
    <section className={styles.signup}>
      <h1>Signup</h1>
      <div className={styles.container}>
        <div className={styles.signup__form}>
          <form>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Full name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className={styles.field}>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" placeholder="company" />
            </div>
            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="subject" />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea type="text" id="message" placeholder="Message..." />
            </div>
          </form>
          <Button>SignUp</Button>
        </div>
        <div className={styles.signup__options}>
          <h3>Other signup methods</h3>
          <div>
            <Button>Google</Button>
            <Button>Google</Button>
            <Button>Google</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default signup;

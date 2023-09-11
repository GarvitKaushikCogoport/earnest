import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "./Logo";
import Button from "./Button";

import styles from "./Navbar.module.css";

function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          <Link href="/">
            <Logo></Logo>
          </Link>
        </li>

        <li>
          <Link href="/" className={router.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>

        <li>
          <Link href="about">About</Link>
        </li>

        <li>
          <Link href="pricing">Pricing</Link>
        </li>

        <li>
          <Link href="tokens">token</Link>
        </li>

        <li>
          <Link href="blog">blog</Link>
        </li>

        <li>
          <Link href="contactus">contact us</Link>
        </li>

        <li>
          <Button>Start Now</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

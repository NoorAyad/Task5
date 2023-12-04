import styles from "./header.module.css";
import { Container } from "../container/container";
import Link from "next/link";
export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h3>Aon Blog</h3>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/About"}>About</Link>
            </li>
            <li>
              <Link href={"/Help"}>Help</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

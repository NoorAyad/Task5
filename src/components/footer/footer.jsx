import styles from "./footer.module.css";
import { Container } from "../container/container";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <h3>All Rights Reserved - Aon2023</h3>
          <ul>
            <li>
              <Link href={"/"}>
                {" "}
                <FaSquareFacebook />
              </Link>
            </li>
            <li>
              <Link href={"/ "}>
                <TiSocialInstagram />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                {" "}
                <FaTwitterSquare />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

import styles from "./card.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
// firstly card without blog
export const Card = ({ blog }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}><Image src={blog.photo_url} fill={true}/></div>
      {/* <p className={styles.title}>FIRST BLOG TITL...</p> */}
      <p className={styles.title}>{blog.title}</p>
      <p className={styles.subtitle}>{blog.category}</p>
      <div className={styles.footer}>
        <Link href={`/article/${blog.id}`}>Read Article</Link>
        <span>{dayjs(blog.created_at).format("YYYY dd MM")}</span>
      </div>
    </div>
  );
};

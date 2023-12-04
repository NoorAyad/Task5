import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import styles from "./page.module.css";
import { Container } from "@/components/container/container";
import dayjs from "dayjs";
import Image from "next/image";
async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Article({ params }) {
  let data = await getData(params.id);

  return (
    <main>
      <Header />
      <Container>
        <div className={styles.head}>
          <div>
            <h1> {data.blog.title}</h1>
            <p> {data.blog.category}</p>
          </div>
          <span> {dayjs( data.blog.created_at).format("YYYY dd MM")}</span>
        </div>
        <div className={styles.cover}>
          <Image src={data.blog.photo_url} fill />
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html:data.blog.content_html}}>
         
        </div>
      </Container>
   
      <Footer />
    </main>
  );
}

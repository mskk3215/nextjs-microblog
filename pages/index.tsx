import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout.js";
import utilsStyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilsStyle.headingMd}>
        <p>
          私はフルスタックのエンジニアです。Udemy講師として活動しています。好きな言語はJavaScriptです。
        </p>
      </section>
      <section>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              ></img>
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilsStyle.boldText}>
                SSGとSSRの使いわけの場面はいつなのか?
              </a>
            </Link>
            <br />
            <small className={utilsStyle.lightText}>Feburary 23, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              ></img>
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilsStyle.boldText}>
                SSGとSSRの使いわけの場面はいつなのか?
              </a>
            </Link>
            <br />
            <small className={utilsStyle.lightText}>Feburary 23, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              ></img>
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilsStyle.boldText}>
                SSGとSSRの使いわけの場面はいつなのか?
              </a>
            </Link>
            <br />
            <small className={utilsStyle.lightText}>Feburary 23, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              ></img>
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilsStyle.boldText}>
                SSGとSSRの使いわけの場面はいつなのか?
              </a>
            </Link>
            <br />
            <small className={utilsStyle.lightText}>Feburary 23, 2022</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}

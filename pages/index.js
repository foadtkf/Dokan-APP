import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SwiperSection from "./home/swiper";
// import Footer from "./shared/footer";
import { useRouter } from "next/router";

export default function Home() {
  const navigate = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SwiperSection />
      <main className={styles.main}>
        <h1 className="text-2xl md:text-9xl" id="test">
          Category
          <a className="text-blue-700 ml-2">Portion</a>
        </h1>

        <div className={styles.grid}>
          <div
            onClick={() => navigate.push(`./categories/${"category1"}`)}
            className={`cursor-pointer ${styles.card}`}
          >
            <h2>Category 1 &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div
            onClick={() => navigate.push(`./categories/${"category2"}`)}
            className={`cursor-pointer ${styles.card}`}
          >
            <h2>Category 2 &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div
            onClick={() => navigate.push(`./categories/${"category3"}`)}
            className={`cursor-pointer ${styles.card}`}
          >
            <h2>Category 3 &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div
            onClick={() => navigate.push(`./categories/${"category4"}`)}
            className={`cursor-pointer ${styles.card}`}
          >
            <h2>Category 4 &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <h1 className="text-2xl md:text-9xl">
          Special
          <a className="text-blue-700 ml-2">Offers</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Offer 1 &rarr;</h2>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Offer 2 &rarr;</h2>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, deleniti!
            </p> */}
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Offer 3 &rarr;</h2>
            {/* <p>Discover and deploy boilerplate example Next.js projects.</p> */}
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Offer 4 &rarr;</h2>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </a>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

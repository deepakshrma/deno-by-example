import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import clsx from "clsx";
import Layout from "@theme/Layout";
import { useWindowSize } from "@docusaurus/theme-common";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const windowSize = useWindowSize();
  const renderTocDesktop = windowSize === "desktop" || windowSize === "ssr";

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description={siteConfig.tagline}>
      <main>
        {/* <section>
          <div className={`${styles.Ad} ${styles.AdSec}`}>
            <AdSense.Google
              client="ca-pub-7756182462259588"
              slot="3255885970"
              style={{ display: "block" }}
              format="auto"
              responsive="true"
            />
          </div>
        </section> */}

        <section>
          <div className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
              <div className={styles.buttons}>
                <Link
                  className={clsx("button button--outline button--secondary button--lg", styles.getStarted)}
                  to={useBaseUrl("/getting-started")}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className={styles.container}>
            <div>
              <h1 className={styles.h1}>{siteConfig.tagline}</h1>
              <img src="img/home_page_dino.jpg"></img>
            </div>
            <div>
              <h2>Deno is the most productive, secure, and performant JavaScript runtime for the modern programmer.</h2>
              <p>Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.</p>
              <br />
              <h4>Why to Learn Deno?</h4>
              <ul>
                <li>Secure by default. No file, network, or environment access, unless explicitly enabled.</li>
                <li>Supports TypeScript out of the box.</li>
                <li>Ships only a single executable file.</li>
                <li>Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).</li>
                <li>Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno: deno.land/std</li>
              </ul>
              <p>
                <span className={styles.header}>Audience: </span>This Deno tutorial is designed devloper to teach from basic.
              </p>
              <p>
                <span className={styles.header}>Prerequisites: </span> You should have a basic understanding of Computer Programming
                terminologies.
              </p>
            </div>
          </div>
        </section>
        {/* <section>
          <div className={`${styles.Ad} ${styles.AdSec}`}>
            <AdSense.Google
              client="ca-pub-7756182462259588"
              slot="3255885970"
              style={{ display: "block" }}
              format="auto"
              responsive="true"
            />
          </div>
        </section> */}
      </main>
    </Layout>
  );
}

export default Home;

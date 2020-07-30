import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import clsx from "clsx";
import Layout from "@theme/Layout";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section className={styles.features}>
          <div className={styles.container}>
            <div>
              <h1 className={styles.h1}>
                Tutorial: Learn Web Programming in Deno by Examples
              </h1>
              <img src="img/home_page_dino.jpg"></img>
            </div>
            <div>
              <h2>
                Deno is a simple, modern and secure runtime for JavaScript and
                TypeScript that uses V8 and is built in Rust.
              </h2>
              <br />
              <h4>Why to Learn Deno?</h4>
              <ul>
                <li>
                  Secure by default. No file, network, or environment access,
                  unless explicitly enabled.
                </li>
                <li>Supports TypeScript out of the box.</li>
                <li>Ships only a single executable file.</li>
                <li>
                  Has built-in utilities like a dependency inspector (deno info)
                  and a code formatter (deno fmt).
                </li>
                <li>
                  Has a set of reviewed (audited) standard modules that are
                  guaranteed to work with Deno: deno.land/std
                </li>
              </ul>
              <p>
                <span className={styles.header}>Audience: </span>This Deno
                tutorial is designed devloper to teach from basic.
              </p>
              <p>
                <span className={styles.header}>Prerequisites: </span> You
                should have a basic understanding of Computer Programming
                terminologies.
              </p>
            </div>
          </div>
        </section>
      </main>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          {/* <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;

import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
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
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          {/* <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <div className={styles.buttons}>
            <Link
              className={classnames(
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

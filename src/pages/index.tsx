import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { HeroComponent } from "../components/Hero";
import { PortfolioWidget } from "../components/Portfolio";
import { Footer } from "../components/Footer";

function HomepageHeader() {
  return (
    <HeroComponent />
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
      <PortfolioWidget />
      <Footer />
      </main>
    </Layout>
  );
}

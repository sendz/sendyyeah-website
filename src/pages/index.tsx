import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { HeroComponent } from "../components/Hero";
import { PortfolioWidget } from "../components/Portfolio";
import { Footer } from "../components/Footer";
import { TalksWidget } from "@site/src/components/Portfolio/Talks";
import { PaperWidget } from "@site/src/components/Portfolio/Paper";

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
      <PaperWidget />
      <TalksWidget />
      <Footer />
      </main>
    </Layout>
  );
}

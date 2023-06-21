import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import {
  CodeBracketSquareIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { AvatarComponent } from "../components/Avatar";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="tw-daisy-hero tw-min-h-screen tw-bg-base-200" style={{ marginTop: -64 }}>
      <div className="tw-daisy-hero-content tw-flex-col tw-justify-between lg:tw-flex-row-reverse">
        <AvatarComponent />
        <div>
          <h1 className="tw-text-5xl tw-font-bold">Hello, my name is Sendy!</h1>
          <p className="tw-py-6 tw-text-lg">
            I am a web frontend developer and maker based in Indonesia. I love
            to build things that usable for people.
          </p>
          <span className="tw-daisy-btn tw-daisy-btn-primary tw-mr-2 tw-cursor-default">
            <CodeBracketSquareIcon className="tw-w-6 tw-h-6 tw-mr-2" />
            Developer
          </span>
          <span className="tw-daisy-btn tw-daisy-btn-primary tw-mr-2 tw-cursor-default">
            <WrenchScrewdriverIcon className="tw-w-6 tw-h-6 tw-mr-2" />
            Maker
          </span>
        </div>
      </div>
    </div>
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

import React from "react"
import { AvatarComponent } from "../Avatar"
import { CodeBracketSquareIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const HeroComponent = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="daisy-hero min-h-screen bg-base-200" style={{ marginTop: -64 }}>
      <div className="daisy-hero-content flex-col justify-between lg:flex-row-reverse">
        <AvatarComponent />
        <div>
          <h1 className="text-5xl font-bold">Hello, my name is Sendy!</h1>
          <p>A web frontend developer based in Indonesia, and also build mechanical keyboard in my free time because I love to build things that usable for people.</p>
          <p>Currently working at <a href="https://www.gojek.com/" target="_blank">Gojek</a> as Web Frontend Developer, and as designer at <a href="https://www.instagram.com/kbdkspco/" target="_blank">Keyboard Kasep</a> to build ergonomic mechanical keyboards.</p>
          <span className="daisy-btn daisy-btn-primary mr-2 cursor-default">
            <CodeBracketSquareIcon className="w-6 h-6 mr-2" />
            Developer
          </span>
          <span className="daisy-btn daisy-btn-primary mr-2 cursor-default">
            <WrenchScrewdriverIcon className="w-6 h-6 mr-2" />
            Maker
          </span>
        </div>
      </div>
    </div>
  )
}

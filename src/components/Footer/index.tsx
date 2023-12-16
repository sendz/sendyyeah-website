import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer p-10">
      <div className="py-16">
        <p className="text-4xl font-bold my-8">
          Interested in working together?
        </p>
        <a className="button button-primary max-w-full w-96">
            <PaperAirplaneIcon className="w-6 h-6 mr-2" />
            Contact Me
        </a>
      </div>
    </footer>
  )
}
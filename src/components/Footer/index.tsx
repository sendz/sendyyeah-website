import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-primary text-primary-content">
      <div className="py-16">
        <p className="text-4xl font-bold my-8">
          Interested in working together?
        </p>
        <a className="daisy-btn daisy-btn-outline daisy-btn-wide daisy-btn-secondary border-white border-solid">
          <div className="text-white flex flex-row items-center">
            <PaperAirplaneIcon className="w-6 h-6 mr-2" />
            Contact Me
          </div>
        </a>
      </div>
    </footer>
  )
}
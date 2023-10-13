import React from "react";
import { IWorksContentComponent, WorksContentComponent } from "./WorksContent.component";

const Works: IWorksContentComponent[] = [
  // {
  //   name: 'GoBiz Dashboard',
  //   description: 'GoBiz Dashboard is a web interface for merchants and restaurant owners to manage their business settings, and reporting with ~15k daily active users across Indonesia and Vietnam.',
  //   tags: ['Web', 'ReactJS', 'TypeScript'],
  //   image: '/img/web_app.s.gobiz.com.jpeg',
  //   url: 'https://app.gobiz.com'
  // },
  // {
  //   name: 'Midtrans Onboarding',
  //   description: 'Midtrans Passport, is an onboarding page for online merchants to gain access to an online payment gateway through the implementation of a KYC flow.',
  //   tags: ['Web', 'ReactJS', 'TypeScript'],
  //   image: '/img/web_passport.stg.midtrans.com.jpeg',
  //   url: 'https://passport.stg.midtrans.com',
  //   reverse: true
  // },
  {
    name: 'Euy Ortholinear Keyboard',
    description: <>Euy <span className="italic">(*a Sundanese word)</span> is a set of 40% ortholinear keyboard and 4x4
      macropad. The goal is to make the keyboard and macropad able to work either as separate device or as one
      interconnected device.</>,
    tags: ['Hardware', 'PCB Design', 'Mechanical Keyboard', 'Kicad', 'QMK'],
    image: '/img/keyboard_euy40.jpeg',
  },
  {
    name: 'Euis 40% Ergonomic Keyboard',
    description: <>Euis <span className="italic">(* a sundanese name for a girl)</span> is a set of 40% ergonomic
      keyboard with Alice layout. It use different tech stack from "Euy", which use RP2040 for the MCU soldered to the
      PCB.</>,
    tags: ['Hardware', 'PCB Design', 'Mechanical Keyboard', 'Kicad', 'QMK', 'KMK', 'ZMK', 'Alice Layout', 'RP2040'],
    image: '/img/euis.jpg',
    reverse: true
  }
]

export const PortfolioWidget = () => {
  return (
    <section title="Portfolio">
      <h2 className="px-8 pt-8 text-4xl font-bold">Portfolio</h2>
      <div className="p-8 snap-mandatory snap-y" id="works-showcase">
        {Works.map((work, index) => (
          <WorksContentComponent
            image={work.image}
            name={work.name}
            description={work.description}
            tags={work.tags}
            reverse={work.reverse}
            url={work.url}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

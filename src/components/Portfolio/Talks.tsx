import React from "react";

export const TalksWidget = () => {
  return (
    <section title="Talks">
      <h2 className="px-8 pt-8 text-4xl font-bold">Talks</h2>
      <ul className="m-8">
        <li>
          <a href="#">
            Build Your own Custom Mechanical Keyboard in Ubuntu, UbuCon Asia 2023, Solo, Indonesia.
          </a>
        </li>
        <li>
          <a href="https://www.slideshare.net/SendyAdityaSuryana/how-to-manage-volunteers-in-opensuse-asia-summit-2016">
            How to Manage Volunteers in openSUSE Asia Summit 2016, openSUSE Asia Summit 2017, Tokyo, Japan.
          </a>
        </li>
        <li>
          <a href="https://www.slideshare.net/SendyAdityaSuryana/how-studentbased-community-promoting-open-source-for-education" target="_blank">
            How Student-based Community Promoting Open Source for Education. openSUSE Asia Summit 2016, Yogyakarta, Indonesia.
          </a>
        </li>
      </ul>
    </section>
  )
}

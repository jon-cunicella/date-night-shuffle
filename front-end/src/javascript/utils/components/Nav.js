import React from "react";
export default function RenderNav() {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list__item">
          <a href="/#">Home</a>
        </li>
        <li className="navigation-list__item">
          <a href="/#">About</a>
        </li>
        <li className="navigation-list__item">
          <a href="/#">Areas</a>
        </li>
        <li className="navigation-list__item">
          <a href="/#">Places</a>
        </li>
      </ul>
    </nav>
  );
}

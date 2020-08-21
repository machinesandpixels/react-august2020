import React, { Fragment, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faHouseDamage,
  faPaintRoller,
  faBrush
} from "@fortawesome/free-solid-svg-icons";
import Hr from "./components/Hr";
// import styled from "@emotion/styled";
// import Icon from "./components/Icon";
import "./App.css";

library.add(fab, faCity, faHouseDamage, faPaintRoller, faBrush);

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(24, 1fr);
//   width: 100%;
//   height: 100vh;
// `;

function App() {
  const [state] = useState({
    categories: [
      {
        icon: "city",
        headline: "Häuser, Industriehallen, Büros",
        description:
          "Komplettsanierung innen und außen inkl. zertifizierten Elektroarbeiten (Altbau/ Neubau)"
      },
      {
        icon: "house",
        headline: "Komplette Dachsanierungen und Dacharbeiten",
        description: ""
      },
      {
        icon: "house-damage",
        headline: "Verputzarbeiten/ Rissbeseitigung",
        description: "jeder Art innen und außen"
      },
      {
        icon: "paint-roller",
        headline: "Malerarbeiten innen und außen",
        description: ""
      },
      {
        icon: "brush",
        headline: "Tapezierarbeiten",
        description: ""
      },
      {
        icon: "scalpel-path",
        headline: "Lieferung & Verlegung von Bodenbelägen",
        description: "Inklusive Bodenausgleich etc."
      },
      {
        icon: "ruler-combined",
        headline: "Trockenbau/ Innenausbau komplett",
        description: ""
      },
      {
        icon: "hammer",
        headline: "Holzarbeiten jeglicher Art",
        description:
          "Produktion in Bischofsheim über 2.000 m2 (Einheitlich qm) mit modernstem Maschinenpark zur Holzbearbeitung inkl. 5 Achs CNC"
      },
      {
        icon: "sink",
        headline: "Individuelle Küchengestaltung",
        description: "Planung, Produktion und Montage"
      },
      {
        icon: "pencil-ruler",
        headline: "Planung, Produktion und Montage",
        description:
          "Innenarchitektur und Design CAD / Rendering / Illustration durch eigene Innenarchitekten / Designer"
      }
    ]
  });

  const category = state.categories.map((city, id) => {
    let headline = city.headline;
    let desc = city.description;
    let icon = city.icon;
    return (
      <Fragment>
        <FontAwesomeIcon icon={icon} />
        <ul key={id}>
          <li>
            <h4>{headline}</h4>
          </li>
          <li>
            <p>{desc}</p>
          </li>
        </ul>
        <Hr />
      </Fragment>
    );
  });
  return <div>{category}</div>;
}

export default App;

import React, { Fragment, useState } from "react";
// import Header from "./components/Header";
// import "./styles.css";
import "./App.css";

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

  let category = state.categories.map((city, id) => {
    let headline = city.headline;
    let desc = city.description;
    return (
      <Fragment>
        <ul key={id}>
          <li>{headline}</li>
          <li>{desc}</li>
        </ul>
        <hr />
      </Fragment>
    );
  });
  return <div> {category} </div>;
}

export default App;

import React, { Component } from "react";
import Header from "./components/Header";
// import "./styles.css";
import "./App.css";

class App extends Component {
  // state = {
  //   name: "Hello00"
  // };
  state = {
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
  };

  render() {
    const styles = {
      ul: "listStyleType: none",
      hr: "border-top: 1px solid red",
      li: "margin: 0 1rem 0"
    };

    let data = this.state.categories.map((city, id) => {
      let headline = city.headline;
      let desc = city.description;
      /* console.log(headline);
      console.log(desc); */
      // <ul style={{ color: "red" }}>
      return (
        <div key={id} style={styles}>
          <ul>
            <li>{headline}</li>
            <li>{desc}</li>
          </ul>
          <hr />
        </div>
      );
    });

    return (
      <div className="">
        <Header />
        {data}
      </div>
    );
  }
}

export default App;

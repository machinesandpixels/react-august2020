import React from "react";
// import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Icons = styled.div`
//   display: grid;
//   grid-column: 3 / -1;
// `;

const Icon = () => {
  return (
    <div>
      <FontAwesomeIcon icon="city" />
      <FontAwesomeIcon icon="house-damage" />
      <FontAwesomeIcon icon="paint-roller" />
      <FontAwesomeIcon icon="brush" />
    </div>
    // <Icons><FontAwesomeIcon icon="city" /> </Icons>
  );
};

export default Icon;

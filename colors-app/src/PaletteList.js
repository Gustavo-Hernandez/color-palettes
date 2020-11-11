import React from "react";
import { Link } from "react-router-dom";

const PaletteList = ({ palettes }) => {
  const names = palettes.map((palette, idx) => (
    <Link to={`/palette/${palette.id}`} key={idx}>
      <p>{palette.paletteName}</p>
    </Link>
  ));
  return (
    <div>
      <h1>React Colors</h1>
      {names}
    </div>
  );
};

export default PaletteList;

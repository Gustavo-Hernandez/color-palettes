import React from "react";
import MiniPalette from "./MiniPalette";

const PaletteList = ({ palettes }) => {
  const miniPalettes = palettes.map((palette, idx) => <MiniPalette key={idx} {...palette} />);
  return (
    <div>
      <h1>React Colors</h1>
      {miniPalettes}
    </div>
  );
};

export default PaletteList;

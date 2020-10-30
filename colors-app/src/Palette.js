import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((color, index) => (
    <ColorBox key={index} background={color.hex} name={color.name} />
  ));

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={(newLevel) => setLevel(newLevel)} />
      <div className="Palette-colors">{colorBoxes}</div>
      {/*Footer goes here*/}
    </div>
  );
};

export default Palette;

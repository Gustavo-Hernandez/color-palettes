import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

const Palette = ({ palette:{colors, paletteName, emoji} }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = colors[level].map((color, index) => (
    <ColorBox key={index} background={color[format]} name={color.name} />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={(newLevel) => setLevel(newLevel)}
        handleFormatChange={(newFormat) => setFormat(newFormat)}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">
          {emoji}
        </span>
      </footer>
    </div>
  );
};

export default Palette;

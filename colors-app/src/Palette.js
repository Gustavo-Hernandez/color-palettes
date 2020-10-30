import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((color, index) => (
    <ColorBox key={index} background={color.hex} name={color.name} />
  ));

  return (
    <div className="Palette">
      <div className="slider">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={(newLevel) => setLevel(newLevel)}
      />
      </div>
      <div className="Palette-colors">{colorBoxes}</div>
      {/*Footer goes here*/}
    </div>
  );
};

export default Palette;

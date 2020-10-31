import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { MenuItem } from "@material-ui/core";

const Navbar = ({ level, changeLevel, handleFormatChange }) => {

  const [format, setFormat] = useState("hex");

  const handleChange = (e) =>{
    setFormat(e.target.value);
    handleFormatChange(e.target.value);
  }

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="/#">reactColorPicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">Hex - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ level, changeLevel, handleFormatChange }) => {
  const [format, setFormat] = useState("hex");
  const [snackOpen, setSnackOpen] = useState(false);

  const handleChange = (e) => {
    setFormat(e.target.value);
    setSnackOpen(true);
    handleFormatChange(e.target.value);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/"> reactColorPicker</Link>
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
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackOpen}
        autoHideDuration={1500}
        message={
          <span id="message-id">Format Changed to {format.toUpperCase()}</span>
        }
        onClose={handleSnackClose}
        ContentProps={{ "aria-describedby": "message-id" }}
        action={
          <React.Fragment>
            <IconButton
              onClick={() => setSnackOpen(false)}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </header>
  );
};

export default Navbar;

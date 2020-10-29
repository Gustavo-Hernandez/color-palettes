import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css"
const Palette = ({colors}) => {
   
   const colorBoxes = colors.map((color, index)=> 
      <ColorBox key={index} background={color.color} name={color.name}/>
   );

  return (
    <div className="Palette">
      {/*Navbar goes here*/}
      <div className="Palette-colors">
         {colorBoxes}
      </div>
      {/*Footer goes here*/}
    </div>
  );
};

export default Palette;

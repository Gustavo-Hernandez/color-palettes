import React from "react";
import { Switch, Route } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";

function App() {
  const findPalette = (routeProps) => {
    let { id } = routeProps.match.params;
    const palette = seedColors.find((palette) => palette.id === id);
    return generatePalette(palette);
  };

  return (
    <Switch>
      <Route exact path="/" render={(routeProps)=><PaletteList palettes={seedColors} {...routeProps}/>}/>
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => <Palette palette={findPalette(routeProps)} />}
      />
    </Switch>
  );
}

export default App;

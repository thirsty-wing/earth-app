import { useState } from "react";
import Title from "./Title";
import { yieldRotateGlobe } from "./Title.utils";


function TitleDatalayer() {

  const [globeOrientation, setGlobeOrientation] = useState(1);

  const onPress = yieldRotateGlobe(globeOrientation, setGlobeOrientation);

  return(
    <Title
      globeOrientation={globeOrientation}
      onPress={onPress}
    />
  );
}

export default TitleDatalayer;

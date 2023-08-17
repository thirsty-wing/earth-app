import { useState } from "react";
import Title from "./Title";
import { yieldRotateGlobe } from "./Title.utils";


function TitleDatalayer() {

  const [globeOrientation, setGlobeOrientation] = useState(1);

  return(
    <Title
      globeOrientation={globeOrientation}
      onPress={yieldRotateGlobe({ globeOrientation, setGlobeOrientation })}
    />
  );
}

export default TitleDatalayer;

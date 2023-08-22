import { useState } from "react";
import Title from "./Title";
import { yieldRotateGlobe } from "./Title.utils";


/**
 * Title of the home screen comprising a pressable which rotates a globe emoji
 *
 * @returns {JSX.Element}
 */
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

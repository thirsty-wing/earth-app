/**
 * rotates the globe
 * @callback rotateGlobe
 */

/**
 * yieldRotateGlobe.
 *
 * @param {object} args
 * @param {number} args.globeOrientation current state of globe orientation
 * @param {function} args.setGlobeOrientation set function for globe orientation
 * @returns {rotateGlobe} function that when called will call args.setGlobeOrientation with the next value in the sequence
 */
export function yieldRotateGlobe(args) {

  const {
    globeOrientation,
    setGlobeOrientation,
  } = args;

  return function() {

    if(globeOrientation > 2) {
      setGlobeOrientation(1);
    } else {
      setGlobeOrientation(globeOrientation + 1);
    }

  };
}

/**
 * getGlobe.
 *
 * @param {number} globeOrientation current globe represented as 1, 2, or 3
 * @returns {string} a globe emoji in one of three orientations
 */
export function getGlobe(globeOrientation) {
  if(globeOrientation === 1) {
    return "🌎";
  }

  if(globeOrientation === 2) {
    return "🌍";
  }

  return "🌏";
}

/**
 * rotates the globe
 * @callback rotateGlobe
 */

/**
 * yieldRotateGlobe.
 *
 * @param {object} args
 * @param {number} args.globeOrientation
 * @param {function} args.setGlobeOrientation
 * @returns {rotateGlobe}
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
 * @param {number} globeOrientation
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

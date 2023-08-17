/**
 * @callback setGlobeOrientation
 * @param {number}
 */

/**
 * yieldRotateGlobe.
 *
 * @param {number} globeOrientation
 * @param {function} setGlobeOrientation
 */
export function yieldRotateGlobe(globeOrientation, setGlobeOrientation) {
  return function() {
    const newGlobeOrientation = globeOrientation > 2
      ? 1
      : globeOrientation + 1;

      setGlobeOrientation(newGlobeOrientation);
  };
}

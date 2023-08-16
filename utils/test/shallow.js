import ShallowRenderer from "react-test-renderer/shallow";


/**
 * creates a shallow rendered string representation of a given react component
 *
 * @param {any} component
 * @returns {string}
 */
export function shallow(component) {
  const renderer = new ShallowRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

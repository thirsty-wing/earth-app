/**
 * navigates to a continent page
 * @callback doNavigate
 */

/**
 * creates a function to be called in the continent Pressable
 *
 * @param {object} args
 * @param {object} args.navigation navigation object
 * @param {function} args.navigation.navigate function used to navigate
 * @param {string} args.code code two-letter code of a continent to navigate to
 * @returns {doNavigate} callback to navigate to the continent corresponding to the code
 */
export function yieldDoNavigate(args) {

  const {
    navigation,
    code,
  } = args;

  return () => navigation.navigate("Continent", { code });
}

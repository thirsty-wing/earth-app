/**
 * creates a function to be called in the continent Pressable
 *
 * @param {object} args
 * @param {object} args.navigation
 * @param {function} args.navigation.navigate
 * @param {string} args.code
 */
export function yieldDoNavigate(args) {

  const {
    navigation,
    code,
  } = args;

  return () => navigation.navigate("Continent", { code });
}

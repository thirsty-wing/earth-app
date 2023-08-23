/**
 * creates a function to be called in the continent Pressable
 *
 * @param {object} args
 * @param {object} args.router
 * @param {function} args.router.push
 * @param {string} args.code
 */
export function yieldDoNavigate(args) {

  const {
    router,
    code,
  } = args;

  return () => router.push(`continent/${code}`);
}

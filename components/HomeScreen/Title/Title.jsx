import { Text, Pressable } from "react-native";
import { theme } from "../../../utils/theme";
import { getGlobe } from "./Title.utils";


/**
 * Title.
 *
 * @param {object} props
 * @param {number} props.globeOrientation
 * @param {Function} props.onPress
 */
function Title(props) {

  const {
    globeOrientation,
    onPress,
  } = props;

  const globe = getGlobe(globeOrientation);

  return(
    <Pressable
      style={{
        alignItems: "center",
        width: "100%",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: theme.palette.text.primary,
          fontSize: theme.sizes.text.title,
          textAlign: "center",
        }}
      >
        What in the world? {globe}
      </Text>
    </Pressable>
  );
}

export default Title;

import { Text, Pressable } from "react-native";
import { theme } from "../../../utils/theme";
import { getGlobe } from "./Title.utils";


/**
 * Title of the home screen comprising a pressable which rotates a globe emoji
 *
 * @param {object} props
 * @param {1|2|3} [props.globeOrientation = 1] one of three orientations of the globe
 * @param {Function} [props.onPress] function to be called when pressed
 * @returns {JSX.Element}
 */
function Title(props) {

  const {
    globeOrientation = 1,
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

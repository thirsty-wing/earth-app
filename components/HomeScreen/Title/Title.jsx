import { Text, TouchableWithoutFeedback } from "react-native";
import { theme } from "../../../utils/theme";


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

  const globe = globeOrientation === 1 ? "🌎" :
    globeOrientation === 2 ? "🌍" :
    "🌏";

  return(
    <TouchableWithoutFeedback
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
    </TouchableWithoutFeedback>
  );
}

export default Title;

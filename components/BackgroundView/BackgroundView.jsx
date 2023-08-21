import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../utils/theme";


/**
 * BackgroundView. Background View which covers the whole screen and contains
 * children in the safe area.
 *
 * @param {object} props
 * @param {JSX.Element[]} [props.children] children elements to render inside
 * @returns {JSX.Element}
 */
function BackgroundView(props) {

  const {
    children = [],
  } = props;

  const insets = useSafeAreaInsets();

  return(
    <View
      style={{
        // background fill the screen
        backgroundColor: theme.palette.background.primary,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        // contain children in safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      { children }
    </View>
  );
}

export default BackgroundView;

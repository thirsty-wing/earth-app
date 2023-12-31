import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./BackgroundView.styles";


/**
 * View which covers the whole screen with a background color and contains
 * children in the safe area.
 *
 * @param {object} props
 * @param {JSX.Element|JSX.Element[]} [props.children] children elements to render inside
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
        // contain children in safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,

        ...styles.root,
      }}
    >
      { children }
    </View>
  );
}

export default BackgroundView;

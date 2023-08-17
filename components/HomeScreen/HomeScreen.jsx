import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../utils/theme";

function HomeScreen() {
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

        // Contain children in safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View
        style={{
          alignItems: "center",
          width: "100%",
          gap: theme.spacing(),
          padding: theme.spacing(3),
        }}
      >
        <Text style={{
          color: theme.palette.text.primary,
          fontSize: theme.sizes.text.title,
          textAlign: "center",
        }}>
          What in the world? 🌎
        </Text>
      </View>
    </View>
  );
}

export default HomeScreen;

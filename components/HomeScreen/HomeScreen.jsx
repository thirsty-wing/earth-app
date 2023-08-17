import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../utils/theme";

function HomeScreen() {
  const insets = useSafeAreaInsets();

  return(
    <View
      style={{
        flex: 1,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingTop: insets.top,
        backgroundColor: theme.palette.background.primary,
      }}
    >
      <View
        style={{
          alignItems: "center",
          flex: 1,
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

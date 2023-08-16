import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function HomeScreen() {
  const insets = useSafeAreaInsets();

  return(
    <View
      style={{
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingTop: insets.top,
        flex: 1,
      }}
    >
      <Text>Hello World!</Text>
    </View>
  );
}

export default HomeScreen;

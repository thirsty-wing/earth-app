import { Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../utils/theme";
import Title from "./Title";


function HomeScreen() {
  const insets = useSafeAreaInsets();

  const paddingHorizontal = theme.spacing(3);

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
      <View style={{ paddingHorizontal }}>
        <Title/>
      </View>
      <ScrollView
        style={{
          gap: theme.spacing(),
          paddingHorizontal,
        }}
      >
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

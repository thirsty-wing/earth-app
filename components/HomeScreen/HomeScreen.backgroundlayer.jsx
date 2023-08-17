import { View } from "react-native";

import HomeScreen from "./HomeScreen";

function HomeScreenBackgroundlayer() {
  return(
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <HomeScreen/>
    </View>
  );
}

export default HomeScreenBackgroundlayer;

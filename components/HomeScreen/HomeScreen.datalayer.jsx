import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./HomeScreen";

function HomeScreenDatalayer() {
  return(
    <SafeAreaProvider>
      <HomeScreen/>
    </SafeAreaProvider>
  );
}

export default HomeScreenDatalayer;

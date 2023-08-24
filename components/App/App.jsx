import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../HomeScreen";
import ContinentScreen from "../ContinentScreen";

const Stack = createNativeStackNavigator();

const linking = {
  config: {
    screens: {
      Home: "",
      Continent: "continent/:code",
    },
  },
};

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Continent" component={ContinentScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

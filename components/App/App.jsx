import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import HomeScreen from "../HomeScreen";
import ContinentScreen from "../ContinentScreen";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

const linking = {
  config: {
    screens: {
      Home: "",
      Continent: "continent/:code",
    },
  },
  prefixes: [],
};

export function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <NavigationContainer linking={linking}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Continent" component={ContinentScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}

export default App;

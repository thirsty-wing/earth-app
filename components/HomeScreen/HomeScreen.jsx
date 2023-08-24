import { View, ScrollView } from "react-native";
import { theme } from "../../utils/theme";
import BackgroundView from "../BackgroundView";
import Title from "./Title";
import ContinentsList from "./ContinentsList";



/**
 * Constitutes the home screen
 *
 * @returns {JSX.Element}
 */
function HomeScreen() {

  const paddingHorizontal = theme.spacing(3);

  return(
    <BackgroundView>
      <View style={{ paddingHorizontal }}>
        <Title/>
      </View>
      <ScrollView
        style={{
          gap: theme.spacing(),
          paddingHorizontal,
        }}
      >
        <ContinentsList/>
      </ScrollView>
    </BackgroundView>
  );
}

export default HomeScreen;

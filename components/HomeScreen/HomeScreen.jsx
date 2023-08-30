import { View, ScrollView } from "react-native";
import BackgroundView from "../BackgroundView";
import Title from "./Title";
import ContinentsList from "./ContinentsList";
import { styles } from "./HomeScreen.styles";



/**
 * Constitutes the home screen
 *
 * @returns {JSX.Element}
 */
function HomeScreen() {

  return(
    <BackgroundView>
      <View style={styles.titleView}>
        <Title/>
      </View>
      <ScrollView style={styles.continentsListView}>
        <ContinentsList/>
      </ScrollView>
    </BackgroundView>
  );
}

export default HomeScreen;

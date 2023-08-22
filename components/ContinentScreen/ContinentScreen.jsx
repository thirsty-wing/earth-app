import { ActivityIndicator, ScrollView, Text, View, Pressable } from "react-native";

import BackgroundView from "../BackgroundView";
import styles from "./ContinentScreen.styles";


/**
 * Shows the continent screen
 *
 * @param {object} props
 * @param {object} [props.data]
 * @param {"LOADING"|"ERROR"|"OK"} [props.responseStatus = "OK"]
 * @param {object} [props.router]
 * @returns {JSX.Element}
 */
function ContinentScreen(props) {

  const {
    data,
    responseStatus = "OK",
    router,
  } = props;


  return(
    <BackgroundView>
      <ScrollView style={styles.scrollView}>

        { responseStatus === "LOADING" &&
          <ActivityIndicator size="large" />
        }


        { responseStatus === "ERROR" &&
            <Text style={styles.plainText}>
              Something went wrong
            </Text>
        }


        { responseStatus === "OK" &&
          <>
            <View style={styles.topView}>
              <Pressable
                style={styles.backPressable}
                onPress={router?.back}
              >
                <Text style={styles.plainText}>
                  Back
                </Text>
              </Pressable>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>
                  {data?.continent?.name}
                </Text>
              </View>
            </View>
            <Text style={styles.plainText}>
              Two letter code: {data?.continent?.code}
            </Text>
            <Text style={styles.plainText}>
              Number of countries: {data?.continent?.countries?.length}
            </Text>
          </>
        }

      </ScrollView>
    </BackgroundView>
  );
}

export default ContinentScreen;

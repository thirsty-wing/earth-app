import { ActivityIndicator, ScrollView, Text, View, Pressable } from "react-native";

import BackgroundView from "../BackgroundView";
import styles from "./ContinentScreen.styles";


/**
 * ContinentScreen.
 *
 * @param {object} props
 * @param {object} [props.data={}]
 * @param {boolean} [props.isError=false]
 * @param {boolean} [props.isLoading=false]
 * @param {boolean} [props.isOk=true]
 * @param {object} [props.navigation]
 * @returns {JSX.Element}
 */
function ContinentScreen(props) {

  const {
    data = {},
    isError = false,
    isLoading = false,
    isOk = true,
    navigation,
  } = props;


  return(
    <BackgroundView>
      <ScrollView style={styles.scrollView}>
        { isLoading &&
          <ActivityIndicator size="large" />
        }


        { isError &&
            <Text style={styles.plainText}>
              Something went wrong
            </Text>
        }


        { isOk &&
          <>
            <View style={styles.topView}>
              <Pressable
                style={styles.backPressable}
                onPress={navigation?.goBack}
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

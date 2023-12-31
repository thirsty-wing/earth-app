import { ActivityIndicator, ScrollView, Text, View, Pressable } from "react-native";

import BackgroundView from "../BackgroundView";
import ContinentSvg from "../ContinentSvg";
import styles from "./ContinentScreen.styles";
import { numberOfLanguages } from "./ContinentScreen.utils";


/**
 * Shows the continent screen
 *
 * @param {object} props
 * @param {object} [props.data={}] data from the api to be shown
 * @param {object} [props.error] ApolloError object
 * @param {boolean} [props.loading=false] whether the data is loading
 * @param {object} [props.navigation] object posessing navigation capabilities
 * @returns {JSX.Element}
 */
function ContinentScreen(props) {

  const {
    data = {},
    error,
    loading: showLoading = false,
    navigation,
  } = props;

  const showError = !showLoading && error;

  const showData = !showLoading && !showError;


  return(
    <BackgroundView>
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
      <ScrollView style={styles.scrollView}>

        { showLoading  &&
          <ActivityIndicator size="large" />
        }


        { showError &&
            <Text style={styles.plainText}>
              Something went wrong
            </Text>
        }


        { showData &&
          <View style={styles.showDataView}>
            <View style={styles.svgViewWidthWrapper}>
              <View style={styles.svgViewHeightWrapper}>
                <View style={styles.svgView}>
                  <ContinentSvg code={data?.continent?.code}/>
                </View>
              </View>
            </View>
            <Text style={styles.subsectionText}>
              Stats
            </Text>
            <Text style={styles.plainText}>
              Two letter code: {data?.continent?.code}
            </Text>
            <Text style={styles.plainText}>
              Number of countries: {data?.continent?.countries?.length}
            </Text>
            <Text style={styles.plainText}>
              Number of languages: {numberOfLanguages(data?.continent?.countries)}
            </Text>
            <Text style={styles.subsectionText}>
              Countries
            </Text>
            {
              data?.continent?.countries?.map(country => {
                return (
                  <View style={styles.countryView} key={`country-${country?.code}`}>
                    <Text style={styles.emojiText}>
                      {country?.emoji}
                    </Text>
                    <Text style={styles.subsectionText}>
                      {country?.name}
                    </Text>
                  </View>

                );
              })
            }
          </View>
        }

      </ScrollView>
    </BackgroundView>
  );
}

export default ContinentScreen;

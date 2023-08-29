import { Text, View, ActivityIndicator, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../utils/theme";
import { yieldDoNavigate } from "./ContinentsList.utils";
import ContinentSvg from "../../ContinentSvg";
import styles from "./ContinentsList.styles";


/**
 * List of continents as pressables
 *
 * @param {object} props
 * @param {object} [props.data]
 * @param {object} [props.error] ApolloError
 * @param {boolean} [props.loading = false]
 */
function ContinentsList(props) {

  const {
    data,
    error,
    loading: showLoading = false,
  } = props;

  const navigation = useNavigation();

  const showError = !showLoading && error;

  const showData = !showLoading && !showError;

  return(
    <View style={styles.rootView}>

      { showLoading &&
        <ActivityIndicator size="large"/>
      }


      { showError &&
        <Text>Something went wrong</Text>
      }


      { showData &&
        data?.continents?.map(continent => (
          <Pressable
            key={`continent-${continent.code}`}
            style={styles.continentPressable}
            onPress={yieldDoNavigate({ navigation, code: continent.code })}
          >
            <View>
              <Text style={styles.continentName}>
                {continent.name}
              </Text>
              <Text style={styles.continentCode}>
                {continent.code}
              </Text>
            </View>
            <View style={styles.svgView}>
              <ContinentSvg code={continent.code}/>
            </View>
          </Pressable>
        ))
      }

    </View>
  );
}

export default ContinentsList;

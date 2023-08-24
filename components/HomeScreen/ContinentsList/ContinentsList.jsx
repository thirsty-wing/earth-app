import { Text, View, ActivityIndicator, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../utils/theme";
import { yieldDoNavigate } from "./ContinentsList.utils";


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
    <View
      style={{
        flex: 1,
        gap: theme.spacing(),
      }}
    >

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
            style={{
              backgroundColor: theme.palette.background.offColor,
              borderRadius: 16,
              padding: 16
            }}
            onPress={yieldDoNavigate({ navigation, code: continent.code })}
          >
            <Text style={{ color: theme.palette.text.primary }}>
              {continent.name}
            </Text>
            <Text style={{ color: theme.palette.text.primary }}>
              {continent.code}
            </Text>
          </Pressable>
        ))
      }

    </View>
  );
}

export default ContinentsList;

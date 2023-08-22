import { Text, View, ActivityIndicator, Pressable } from "react-native";
import { theme } from "../../../utils/theme";
import { useRouter } from "expo-router";


/**
 * List of continents as pressables
 *
 * @param {object} props
 * @param {object} [props.data]
 * @param {"LOADING"|"ERROR"|"OK"} [props.responseStatus = "OK"]
 */
function ContinentsList(props) {

  const {
    data,
    responseStatus = "OK",
  } = props;

  const router = useRouter();

  /**
   * creates a function to be called in the continent Pressable
   *
   * @param {string} code
   */
  function makeDoNavigate(code) {
    return () => router.push(`continent/${code}`);
  }

  return(
    <View
      style={{
        flex: 1,
        gap: theme.spacing(),
      }}
    >

      { responseStatus === "LOADING" &&
        <ActivityIndicator size="large"/>
      }


      { responseStatus === "ERROR" &&
        <Text>Something went wrong</Text>
      }


      { responseStatus === "OK" &&
        data?.continents?.map(continent => (
          <Pressable
            key={`continent-${continent.code}`}
            style={{
              backgroundColor: theme.palette.background.offColor,
              borderRadius: 16,
              padding: 16
            }}
            onPress={makeDoNavigate(continent.code)}
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

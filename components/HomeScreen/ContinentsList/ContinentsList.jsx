import { Text, View, ActivityIndicator, Pressable } from "react-native";
import { theme } from "../../../utils/theme";


/**
 * ContinentsList.
 *
 * @param {object} props
 * @param {object} props.data
 * @param {boolean} props.loading
 * @param {function} props.refetch
 */
function ContinentsList(props) {

  const {
    data = {},
    error = false,
    loading = false,
    refetch,
  } = props;

  const isLoading = loading;

  const isError = !isLoading && error;

  const isOk = !isLoading && !isError;

  return(
    <View
      style={{
        flex: 1,
        gap: theme.spacing(),
      }}
    >

      { isLoading &&
        <ActivityIndicator size="large"/>
      }


      { isError &&
        <Text>Something went wrong</Text>
      }


      { isOk &&
        data?.continents?.map(continent => (
          <Pressable
            key={`continent-${continent.code}`}
            style={{
              backgroundColor: theme.palette.background.offColor,
              borderRadius: 16,
              padding: 16
            }}
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

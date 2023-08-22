import { Text, View, ActivityIndicator, Pressable } from "react-native";
import { theme } from "../../../utils/theme";
import { useRouter } from "expo-router";


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

  const router = useRouter();

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
            onPress={() => router.push(`continent/${continent.code}`)}
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

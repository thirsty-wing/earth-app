import { ActivityIndicator, ScrollView, Text, View, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { theme } from "../../utils/theme";
import BackgroundView from "../BackgroundView";
import useFetchEarth from "../../utils/hooks/useFetchEarth";


function ContinentScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [
    data,
    loading,
    error,
    refetch,
  ] = useFetchEarth(
    `query{
      continent(code: "${params.code}") {
        name
        code
        countries {
          name
          code
          emoji
        }
      }
    }`
  );

  const isLoading = loading;

  const isError = !isLoading && error;

  const isOk = !isLoading && !isError;

  const paddingHorizontal = theme.spacing(3);

  return(
    <BackgroundView>
      <ScrollView
        style={{
          gap: theme.spacing(),
          paddingHorizontal,
        }}
      >
        { isLoading &&
          <ActivityIndicator size="large" />
        }


        { isError &&
            <Text style={{ color: theme.palette.text.primary }}>
              Something went wrong
            </Text>
        }


        { isOk &&
          <>
            <View
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <Pressable
                style={{
                  padding: 16,
                  backgroundColor: theme.palette.action.primary,
                }}
                onPress={router.back}
              >
                <Text
                  style={{
                    color: theme.palette.text.primary,
                  }}
                >
                  Back
                </Text>
              </Pressable>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "row",

                }}>
                <Text
                  style={{
                    color: theme.palette.text.primary,
                    fontSize: theme.sizes.text.subsection,
                  }}
                >
                  {data?.continent?.name}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: theme.palette.text.primary,
              }}
            >
              Two letter code: {data?.continent?.code}
            </Text>
            <Text
              style={{
                color: theme.palette.text.primary,
              }}
            >
              Number of countries: {data?.continent?.countries?.length}
            </Text>
          </>
        }
      </ScrollView>
    </BackgroundView>
  );
}

export default ContinentScreen;

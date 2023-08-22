import { useLocalSearchParams, useRouter } from "expo-router";

import useFetchEarth from "../../utils/hooks/useFetchEarth";
import ContinentScreen from "./ContinentScreen";

function ContinentScreenDatalayer() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [
    data,
    isLoading,
    error,
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

  const isError = !isLoading && error;

  const isOk = !isLoading && !isError;

  console.log("datalayer data:", data);

  return(
    <ContinentScreen
      data={data}
      isError={isError}
      isLoading={isLoading}
      isOk={isOk}
      router={router}
    />
  );
}

export default ContinentScreenDatalayer;

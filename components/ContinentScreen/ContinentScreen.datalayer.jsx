import { useLocalSearchParams, useRouter } from "expo-router";

import useFetchEarth from "../../utils/hooks/useFetchEarth";
import ContinentScreen from "./ContinentScreen";

/**
 * Shows the continent screen with data
 *
 * @returns {JSX.Element}
 */
function ContinentScreenDatalayer() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [
    data,
    responseStatus,
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

  return(
    <ContinentScreen
      data={data}
      responseStatus={responseStatus}
      router={router}
    />
  );
}

export default ContinentScreenDatalayer;

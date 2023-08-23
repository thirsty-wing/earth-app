import useFetchEarth from "../../utils/hooks/useFetchEarth";
import ContinentScreen from "./ContinentScreen";

function ContinentScreenDatalayer(props) {

  const {
    route,
    navigation,
  } = props;

  const code = route.params.code;

  const [
    data,
    isLoading,
    error,
  ] = useFetchEarth(
    `query{
      continent(code: "${code}") {
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

  return(
    <ContinentScreen
      data={data}
      isError={isError}
      isLoading={isLoading}
      isOk={isOk}
      navigation={navigation}
    />
  );
}

export default ContinentScreenDatalayer;

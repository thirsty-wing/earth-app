import useFetchEarth from "../../utils/hooks/useFetchEarth";
import ContinentScreen from "./ContinentScreen";

/**
 * Shows the continent screen with data
 *
 * @param {object} props
 * @param {object} props.route
 * @param {object} props.route.params
 * @param {string} props.route.params.code
 * @param {object} props.navigation
 * @returns {JSX.Element}
 */
function ContinentScreenDatalayer(props) {

  const {
    route,
    navigation,
  } = props;

  const code = route?.params?.code;

  const [
    data,
    responseStatus,
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

  return(
    <ContinentScreen
      data={data}
      responseStatus={responseStatus}
      navigation={navigation}
    />
  );
}

export default ContinentScreenDatalayer;

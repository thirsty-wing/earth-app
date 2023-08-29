import { gql, useQuery } from "@apollo/client";

import ContinentScreen from "./ContinentScreen";


/**
 * Shows the continent screen with data
 *
 * @param {object} props
 * @param {object} props.route route object from react-navigation
 * @param {object} props.route.params params in route object
 * @param {string} props.route.params.code the continent two-letter code
 * @param {object} props.navigation object posessing navigation capabilities
 * @returns {JSX.Element}
 */
function ContinentScreenDatalayer(props) {

  const {
    route,
    navigation,
  } = props;

  const code = route?.params?.code;

  const GET_CONTINENT = gql`
    query{
      continent(code: "${code}") {
        code
        countries {
          code
          emoji
          name
          languages {
            code
          }
        }
        name
      }
    }
  `;

  const {
    data,
    error,
    loading,
  } = useQuery(GET_CONTINENT);

  return(
    <ContinentScreen
      data={data}
      error={error}
      loading={loading}
      navigation={navigation}
    />
  );
}

export default ContinentScreenDatalayer;

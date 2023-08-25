import { gql, useQuery } from "@apollo/client";

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

  const GET_CONTINENT = gql`
    query{
      continent(code: "${code}") {
        code
        countries {
          code
          emoji
          name
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

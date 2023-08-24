import { gql, useQuery } from "@apollo/client";

import ContinentsList from "./ContinentsList";


const GET_CONTINENTS = gql`
  query{
    continents {
      name
      code
    }
  }
`;

/**
 * List of continents as pressables with data
 *
 * @returns {JSX.Element}
 */
function ContinentsListDatalayer() {

  const {
    data,
    error,
    loading,
  } = useQuery(GET_CONTINENTS);

  return(
    <ContinentsList
      data={data}
      error={error}
      loading={loading}
    />
  );
}

export default ContinentsListDatalayer;

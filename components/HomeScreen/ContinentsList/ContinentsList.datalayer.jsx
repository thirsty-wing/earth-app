import useFetchEarth from "../../../utils/hooks/useFetchEarth";
import ContinentsList from "./ContinentsList";


/**
 * List of continents as pressables with data
 *
 * @returns {JSX.Element}
 */
function ContinentsListDatalayer() {

  const [
    data,
    responseStatus,
  ] = useFetchEarth(
    `query{
      continents {
        name
        code
      }
    }`
  );

  return(
    <ContinentsList
      data={data}
      responseStatus={responseStatus}
    />
  );
}

export default ContinentsListDatalayer;

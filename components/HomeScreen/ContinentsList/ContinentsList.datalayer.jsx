import useFetchEarth from "../../../utils/hooks/useFetchEarth";
import ContinentsList from "./ContinentsList";


function ContinentsListDatalayer() {

  const [
    data,
    loading,
    error,
    refetch,
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
      loading={loading}
      error={error}
      refetch={refetch}
    />
  );
}

export default ContinentsListDatalayer;

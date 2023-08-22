import { createApolloFetch } from "apollo-fetch";
import { useState, useEffect } from "react";

const fetch = createApolloFetch({
  uri: "https://countries.trevorblades.com/graphql",
});

/**
 * useFetchEarth.
 *
 * @param {string} graphql query with fields to be fetched
 */
export function useFetchEarth(query) {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {

    setLoading(true);
    setError(false);

    fetch({ query }).then(response => {
      setData(response.data);
      setLoading(false);
      setError(false);
    }).catch(error => {
      console.error(`error fetching. query: ${query}, error: ${error}`);
      setLoading(false);
      setError(true);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [ data, loading, error, fetchData ];

}

export default useFetchEarth;

import { createApolloFetch } from "apollo-fetch";
import { useState, useEffect } from "react";

const fetch = createApolloFetch({
  uri: "https://countries.trevorblades.com/graphql",
});

/**
 * useFetchEarth.
 *
 * @param {string} query graphql query string with fields to be fetched
 *
 * @returns {[object,"LOADING"|"ERROR"|"OK",function]} response data, response status, refetch callback
 */
export function useFetchEarth(query) {

  const [data, setData] = useState({});

  /** @type ["LOADING"|"ERROR"|"OK",function] */
  const [responseStatus, setResponseStatus] = useState("LOADING");

  async function fetchData() {

    setResponseStatus("LOADING");

    fetch({ query }).then(response => {
      setData(response.data);
      setResponseStatus("OK");
    }).catch(error => {
      console.error(`error fetching. query: ${query}, error: ${error}`);
      setResponseStatus("ERROR");
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [ data, responseStatus, fetchData ];

}

export default useFetchEarth;

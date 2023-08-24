const client = {
  ApolloClient: jest.fn(),
  ApolloProvider: jest.fn(),
  InMemoryCache: jest.fn(),
  gql: jest.fn(),
  useQuery: () => ({
    data: {},
    error: {},
    loading: false,
  }),
};

module.exports = client;

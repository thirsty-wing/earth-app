import ContinentScreenDatalayer from "../ContinentScreen.datalayer";
import { shallow } from "../../../utils/test/shallow";


jest.mock("@apollo/client", () => ({
  gql: () => jest.fn(),
  useQuery: () => ({
    data: {},
    error: {},
    loading: false,
  }),
}));

it("should render", () => {

  const route = {
    params: {
      code: "GW",
    },
  };

  const content = shallow(
    <ContinentScreenDatalayer
      route={route}
      navigation={{}}
    />
  );

  expect(content).toMatchSnapshot();
});

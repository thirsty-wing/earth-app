import ContinentScreenDatalayer from "../ContinentScreen.datalayer";
import { shallow } from "../../../utils/test/shallow";


jest.mock("apollo-fetch", () => ({
  createApolloFetch: () => jest.fn(),
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

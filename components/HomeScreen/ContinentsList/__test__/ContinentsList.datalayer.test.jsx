import ContinentsList from "../ContinentsList.datalayer";
import { shallow } from "../../../../utils/test/shallow";

jest.mock("apollo-fetch", () => ({
    createApolloFetch: () => jest.fn(),
  })
);

it("should render", () => {
  const content = shallow(<ContinentsList/>);

  expect(content).toMatchSnapshot();
});

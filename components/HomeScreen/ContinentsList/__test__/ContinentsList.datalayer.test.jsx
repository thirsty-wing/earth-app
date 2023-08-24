import ContinentsList from "../ContinentsList.datalayer";
import { shallow } from "../../../../utils/test/shallow";


jest.mock("@apollo/client", () => ({
  gql: () => jest.fn(),
  useQuery: () => ({
    data: {},
    error: {},
    loading: false,
  }),
}));

it("should render", () => {
  const content = shallow(<ContinentsList/>);

  expect(content).toMatchSnapshot();
});

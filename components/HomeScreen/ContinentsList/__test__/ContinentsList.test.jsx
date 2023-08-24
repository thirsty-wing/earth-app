import ContinentsList from "../ContinentsList";
import { shallow } from "../../../../utils/test/shallow";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));


it("should render with continents", () => {
  const content = shallow(<ContinentsList
    data={{
      continents: [
        {
          name: "Pangea",
          code: "PG",
        },
        {
          name: "Gondwana",
          code: "GW",
        },
        {
          name: "Pannotia",
          code: "PN",
        },
      ]
    }}
  />);

  expect(content).toMatchSnapshot();
});

it("should render loading", () => {
  const content = shallow(<ContinentsList responseStatus="LOADING"/>);

  expect(content).toMatchSnapshot();
});

it("should render error", () => {
  const content = shallow(<ContinentsList responseStatus="ERROR"/>);

  expect(content).toMatchSnapshot();
});

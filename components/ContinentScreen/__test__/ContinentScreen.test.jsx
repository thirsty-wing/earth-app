import ContinentScreen from "../ContinentScreen";
import { shallow } from "../../../utils/test/shallow";


jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }),
}));


it("should render", () => {
  const content = shallow(<ContinentScreen/>);

  expect(content).toMatchSnapshot();
});

it("should render with LOADING response status", () => {
  const content = shallow(<ContinentScreen responseStatus="LOADING"/>);

  expect(content).toMatchSnapshot();
});

it("should render with ERROR response status", () => {
  const content = shallow(<ContinentScreen responseStatus="ERROR"/>);

  expect(content).toMatchSnapshot();
});

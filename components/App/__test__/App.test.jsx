import App from "../App";
import { shallow } from "../../../utils/test/shallow";


jest.mock("@react-navigation/native-stack", () => ({
  createNativeStackNavigator: () => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  }),
}));


it("should render", () => {
  const content = shallow(<App/>);

  expect(content).toMatchSnapshot();
});


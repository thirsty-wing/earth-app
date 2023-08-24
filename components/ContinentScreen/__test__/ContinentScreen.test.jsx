import ContinentScreen from "../ContinentScreen";
import { shallow } from "../../../utils/test/shallow";

it("should render", () => {
  const content = shallow(<ContinentScreen/>);

  expect(content).toMatchSnapshot();
});

it("should render with LOADING response status", () => {
  const content = shallow(<ContinentScreen loading/>);

  expect(content).toMatchSnapshot();
});

it("should render with ERROR response status", () => {
  const content = shallow(<ContinentScreen error={{}}/>);

  expect(content).toMatchSnapshot();
});

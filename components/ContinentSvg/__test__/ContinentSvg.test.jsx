import { shallow } from "../../../utils/test/shallow";
import ContinentSvg from "../ContinentSvg";


it("should render when no code is passed in", () => {
  const content = shallow(<ContinentSvg/>);

  expect(content).toMatchSnapshot();
});

it("should render when Africa code is passed in", () => {
  const content = shallow(<ContinentSvg code="AF"/>);

  expect(content).toMatchSnapshot();
});

it("should render when Antarctica code is passed in", () => {
  const content = shallow(<ContinentSvg code="AN"/>);

  expect(content).toMatchSnapshot();
});

it("should render when Asia code is passed in", () => {
  const content = shallow(<ContinentSvg code="AS"/>);

  expect(content).toMatchSnapshot();
});

it("should render when Europe code is passed in", () => {
  const content = shallow(<ContinentSvg code="EU"/>);

  expect(content).toMatchSnapshot();
});

it("should render when North America code is passed in", () => {
  const content = shallow(<ContinentSvg code="NA"/>);

  expect(content).toMatchSnapshot();
});

it("should render when Oceania code is passed in", () => {
  const content = shallow(<ContinentSvg code="OC"/>);

  expect(content).toMatchSnapshot();
});

it("should render when South America code is passed in", () => {
  const content = shallow(<ContinentSvg code="SA"/>);

  expect(content).toMatchSnapshot();
});


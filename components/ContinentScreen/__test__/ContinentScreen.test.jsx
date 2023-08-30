import ContinentScreen from "../ContinentScreen";
import { shallow } from "../../../utils/test/shallow";

it("should render", () => {

  const data = {
    continent: {
      name: "Mu",
      code: "MU",
      countries: [{
        code: "ZK",
        name: "Zerker",
        emoji: "🗿",
        languages: [{
          code: "ZR",
        }]
      }],
    },
  };
  const content = shallow(<ContinentScreen data={data}/>);

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

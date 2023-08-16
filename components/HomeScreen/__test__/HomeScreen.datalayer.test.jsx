import HomeScreen from "../HomeScreen.datalayer";
import { shallow } from "../../../utils/test/shallow";


it("should render", () => {
  const content = shallow(<HomeScreen/>);

  expect(content).toMatchSnapshot();
});


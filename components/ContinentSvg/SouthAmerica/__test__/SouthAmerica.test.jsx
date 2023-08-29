import { shallow } from "../../../../utils/test/shallow";
import SouthAmerica from "../SouthAmerica";


it("should render", () => {
  const content = shallow(<SouthAmerica/>);

  expect(content).toMatchSnapshot();
});

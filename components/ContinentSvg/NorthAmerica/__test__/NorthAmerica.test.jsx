import { shallow } from "../../../../utils/test/shallow";
import NorthAmerica from "../NorthAmerica";


it("should render", () => {
  const content = shallow(<NorthAmerica/>);

  expect(content).toMatchSnapshot();
});

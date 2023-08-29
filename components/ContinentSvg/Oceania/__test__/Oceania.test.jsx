import { shallow } from "../../../../utils/test/shallow";
import Oceania from "../Oceania";


it("should render", () => {
  const content = shallow(<Oceania/>);

  expect(content).toMatchSnapshot();
});

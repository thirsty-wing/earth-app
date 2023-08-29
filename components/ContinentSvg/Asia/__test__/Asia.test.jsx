import { shallow } from "../../../../utils/test/shallow";
import Asia from "../Asia";


it("should render", () => {
  const content = shallow(<Asia/>);

  expect(content).toMatchSnapshot();
});

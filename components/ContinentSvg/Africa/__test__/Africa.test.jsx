import { shallow } from "../../../../utils/test/shallow";
import Africa from "../Africa";


it("should render", () => {
  const content = shallow(<Africa/>);

  expect(content).toMatchSnapshot();
});

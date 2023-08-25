import { shallow } from "../../../../utils/test/shallow";
import Antarctica from "../Antarctica";


it("should render", () => {
  const content = shallow(<Antarctica/>);

  expect(content).toMatchSnapshot();
});

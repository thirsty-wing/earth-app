import { shallow } from "../../../../utils/test/shallow";
import Europe from "../Europe";


it("should render", () => {
  const content = shallow(<Europe/>);

  expect(content).toMatchSnapshot();
});

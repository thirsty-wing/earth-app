import Title from "../Title.datalayer";
import { shallow } from "../../../../utils/test/shallow";


it("should render", () => {
  const content = shallow(<Title/>);

  expect(content).toMatchSnapshot();
});


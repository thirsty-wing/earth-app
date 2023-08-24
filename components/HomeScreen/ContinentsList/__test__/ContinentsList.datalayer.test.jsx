import ContinentsList from "../ContinentsList.datalayer";
import { shallow } from "../../../../utils/test/shallow";


it("should render", () => {
  const content = shallow(<ContinentsList/>);

  expect(content).toMatchSnapshot();
});

import Title from "../Title";
import { shallow } from "../../../../utils/test/shallow";


it("should render with globeOrientation as 1", () => {
  const content = shallow(<Title/>);

  expect(content).toMatchSnapshot();
});

it("should render with globeOrientation as 2", () => {
  const content = shallow(
    <Title
      globeOrientation={2}
    />
  );

  expect(content).toMatchSnapshot();
});

it("should render with globeOrientation as 3", () => {
  const content = shallow(
    <Title
      globeOrientation={3}
    />
  );

  expect(content).toMatchSnapshot();
});


import Title from "../Title";
import { shallow } from "../../../../utils/test/shallow";


it("should render with globeOrientation as 1", () => {
  const content = shallow(
    <Title
      globeOrientation={1}
      onPress={jest.fn()}
    />
  );

  expect(content).toMatchSnapshot();
});

it("should render with globeOrientation as 2", () => {
  const content = shallow(
    <Title
      globeOrientation={2}
      onPress={jest.fn()}
    />
  );

  expect(content).toMatchSnapshot();
});

it("should render with globeOrientation as 3", () => {
  const content = shallow(
    <Title
      globeOrientation={3}
      onPress={jest.fn()}
    />
  );

  expect(content).toMatchSnapshot();
});


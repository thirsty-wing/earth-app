import BackgroundView from "../BackgroundView";
import { shallow } from "../../../utils/test/shallow";


jest.mock("react-native-safe-area-context", () => ({
    useSafeAreaInsets: () => ({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }),
  })
);


it("should render", () => {
  const content = shallow(<BackgroundView/>);

  expect(content).toMatchSnapshot();
});


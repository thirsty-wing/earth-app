import { yieldDoNavigate } from "../ContinentsList.utils";

it("should be called with the passed in code", () => {

  const navigation = {
    navigate: jest.fn(),
  };

  const code = "PG";

  const doNavigate = yieldDoNavigate({ navigation, code });

  doNavigate();

  expect(navigation.navigate).toBeCalledWith("Continent", { code });

});

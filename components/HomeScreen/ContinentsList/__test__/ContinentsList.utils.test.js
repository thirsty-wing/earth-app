import { yieldDoNavigate } from "../ContinentsList.utils";

it("should be called with the passed in code", () => {

  const router = {
    push: jest.fn(),
  };

  const code = "PG";

  const doNavigate = yieldDoNavigate({ router, code });

  doNavigate();

  expect(router.push).toBeCalledWith(`continent/${code}`);

});

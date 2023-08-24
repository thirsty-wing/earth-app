
const expoRouter = {
  useRouter: function() {
    return {
      push: jest.fn(),
      back: jest.fn(),
    };
  }
};

module.exports = expoRouter;

import { numberOfLanguages } from "../ContinentScreen.utils";

describe("numberOfLanguages", () => {

  it("given undefined countries should return 0", () => {
    expect(numberOfLanguages()).toEqual(0);
  });


  it("given empty countries should return 0", () => {
    expect(numberOfLanguages([])).toEqual(0);
  });

  it("given undefined languages should return 0", () => {
    expect(numberOfLanguages([{}])).toEqual(0);
  });

  it("given empty languages should return 0", () => {
    const result = numberOfLanguages([
      {
        languages: [],
      },
    ]);

    expect(result).toEqual(0);
  });

  it("given undefined code should return 0", () => {
    const result = numberOfLanguages([
      {
        languages: [{}],
      },
    ]);

    expect(result).toEqual(0);
  });


  it("given one code should return 1", () => {
    const result = numberOfLanguages([
      {
        languages: [{ code: "EN" }],
      },
    ]);

    expect(result).toEqual(1);
  });

  it("given two codes should return 2", () => {
    const result = numberOfLanguages([
      {
        languages: [
          { code: "EN" },
          { code: "ES" },
        ],
      },
    ]);

    expect(result).toEqual(2);
  });

  it(
    `given two langauge arrays, one with two codes, and one with a duplicate
    should return 2`,
    () => {
      const result = numberOfLanguages([
        {
          languages: [
            { code: "EN" },
            { code: "ES" },
          ],
        },
        {
          languages: [
            { code: "ES" },
          ],
        },
      ]);

      expect(result).toEqual(2);
    }
  );

  it(
    `given two langauge arrays, one with a code, and one with another should
    return 2`,
    () => {
      const result = numberOfLanguages([
        {
          languages: [
            { code: "EN" },
          ],
        },
        {
          languages: [
            { code: "ES" },
          ],
        },
      ]);

      expect(result).toEqual(2);
    }
  );


});

import { yieldRotateGlobe } from "../Title.utils";


it("should rotate from 1 to 2", () => {

  let num = 1;

  const rotateGlobe = yieldRotateGlobe(num, n => { num = n });

  rotateGlobe();

  expect(num).toEqual(2);
});

it("should rotate from 2 to 3", () => {

  let num = 2;

  const rotateGlobe = yieldRotateGlobe(num, n => { num = n });

  rotateGlobe();

  expect(num).toEqual(3);
});

it("should rotate from 3 to 1", () => {

  let num = 3;

  const rotateGlobe = yieldRotateGlobe(num, n => { num = n });

  rotateGlobe();

  expect(num).toEqual(1);
});

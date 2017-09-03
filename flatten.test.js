const flatten = require('./flatten');

it("should flatten given array", () => {
  expect(flatten([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(flatten([1])).toEqual([1]);
  expect(flatten([])).toEqual([]);
  expect(flatten([1, 2, [3, [4, 5]]])).toEqual([1, 2, 3, 4, 5]);
});

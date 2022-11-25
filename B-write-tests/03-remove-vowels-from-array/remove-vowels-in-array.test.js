let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  expect(removeVowelsFromWords(["Irina", "Etza", "Daniel"])).toEqual([
    "Irn",
    "Etz",
    "Dnl",
  ]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

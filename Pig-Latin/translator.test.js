const main = require("./translator");

//vowel tests
test("word starts with a", () => {
  let result = main.translate("apple");
  expect(result).toBe("appleway");
});
test("word starts with e", () => {
  let result = main.translate("energy");
  expect(result).toBe("energyway");
});
test("word starts with i", () => {
  let result = main.translate("igloo");
  expect(result).toBe("iglooway");
});
test("word starts with o", () => {
  let result = main.translate("object");
  expect(result).toBe("objectway");
});
test("word starts with u", () => {
  let result = main.translate("union");
  expect(result).toBe("unionway");
});

//single consonant tests
test("word starts with a consonant", () => {
  let result = main.translate("giraffe");
  expect(result).toBe("iraffegay");
});
test("word starts with a consonant", () => {
  let result = main.translate("register");
  expect(result).toBe("egisterray");
});

//multiple consonant tests
test("word starts with two consonants", () => {
  let result = main.translate("frog");
  expect(result).toBe("ogfray");
});
test("word starts with three consonants", () => {
  let result = main.translate("phrase");
  expect(result).toBe("asephray");
});

//lowercase test
test("takes word with uppercase letters and makes them lowercase", () => {
  let result = main.translate("TraNslAtor");
  expect(result).toBe("anslatortray");
});

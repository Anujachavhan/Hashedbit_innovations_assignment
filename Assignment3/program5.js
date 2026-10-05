function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

let correct_word = correctfn(
  "I love JavaScrpt",
  "JavaScrpt",
  "JavaScript"
);

console.log(correct_word);
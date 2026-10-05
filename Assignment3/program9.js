function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

let paragraph = "JavaScript is a very powerful programming language.";

console.log(countWords(paragraph));

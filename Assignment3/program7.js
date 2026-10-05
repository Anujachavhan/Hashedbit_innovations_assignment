const students = [
  { name: "Anuja", scores: [80, 70, 60] },
  { name: "Sakshi", scores: [80, 70, 90] },
  { name: "Aakansha", scores: [60, 70, 80] },
  { name: "Meghna", scores: [90, 90, 80, 80] }
];

const No_Of_Words = students.map(student => {
  const total = student.scores.reduce((sum, score) => sum + score, 0);

  const average = total / student.scores.length;

  return {
    name: student.name,
    average: average
  };
});

console.log(No_Of_Words);
const students1 = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },

  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },

  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

const result = Object.entries(students1).reduce((acc, [student, subjects]) => {
  const marks = Object.values(subjects);

  const total = marks.reduce((sum, mark) => sum + mark, 0);

  const average = total / marks.length;

  acc[student] = {
    average: average
  };

  return acc;
}, {});

console.log(result);
const submissions = [
    {
      name: "Jane",
      score: 95,
      passed: true,
    },
    {
      name: "Joe",
      score: 77,
      passed: true,
    },
    {
      name: "Jack",
      score: 59,
      passed: false,
    },
    {
      name: "Jill",
      score: 88,
      passed: true,
    },
  ];
  
  function addSubmission(array, newName, newScore) {
    let passed = newScore >= 60 ? true : false;
    const newSubmission = {
      name: newName,
      score: newScore,
      passed: passed,
    };
    array.push(newSubmission);
  }
  
  addSubmission(submissions, "John", 55);
  console.log(submissions);
  
  function deleteSubmissionByIndex(array, index) {
    array.splice(index);
  }
  deleteSubmissionByIndex(submissions, 3);
  console.log(submissions);

  const deleteSubmissionByName = (array, name) => {

  }

  const editSubmission = (array, index, score) => {
    
  }

  const findAverageScore = (array) => {
    let sum = 0;
    array.forEach((student) => {
        sum += student.score;
    });

    return sum / array.length;
  }
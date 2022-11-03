///////////////////////////////////////////////////////////////////////Part One//////////////////////////////////////////////////////////////////////
let submissions = [
  { name: "jane", score: 95, date: "2020-01-24", passed: true },
  { name: "joe", score: 77, date: "2018-05-14", passed: true },
  { name: "jack", score: 59, date: "2019-07-05", passed: false },
  { name: "jill", score: 88, date: "2020-04-22", passed: true },
];

///////////////////////////////////////////////////////////////////////Part Two//////////////////////////////////////////////////////////////////////
function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
  };
  newSubmission.score >= 60
    ? (newSubmission.passed = true)
    : (newSubmission.passed = false);

  array.push(newSubmission);
  console.log(array);
}
//addSubmission(submissions, "sally", 60, "2020-01-01");

///////////////////////////////////////////////////////////////////////Part Three//////////////////////////////////////////////////////////////////////
function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
  console.log(array);
}
//deleteSubmissionByIndex(submissions, 1);

///////////////////////////////////////////////////////////////////////Part Four//////////////////////////////////////////////////////////////////////
function deleteSubmissionByName(array, name) {
  let indexOfObject = array.findIndex((object) => {
    return object.name === name;
  });
  array.splice(indexOfObject, 1);
}
//deleteSubmissionByName(submissions, "jill");
//console.log(submissions);

///////////////////////////////////////////////////////////////////////Part Five//////////////////////////////////////////////////////////////////////
function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score >= 60;
}

editSubmission(submissions, 2, 4);
console.log(submissions);

///////////////////////////////////////////////////////////////////////Part Six//////////////////////////////////////////////////////////////////////
function findSubmissionByName(array, name) {
  let find = array.find((array) => {
    return array.name === name;
  });
  console.log(find);
}
//findSubmissionByName(submissions, "joe");

///////////////////////////////////////////////////////////////////////Part Seven//////////////////////////////////////////////////////////////////////

function findLowestScore(array) {
  let LowestScore = array[0];
  array.forEach((submission) => {
    if (submission.score < LowestScore.score) {
      LowestScore = submission;
    }
  });
  return LowestScore;
}

//console.log(findLowestScore(submissions));

///////////////////////////////////////////////////////////////////////Part Eight//////////////////////////////////////////////////////////////////////
function findAverageScore(array) {
  let average = 0;
  for (let submission of array) {
    average += submission.score;
  }
  return average / array.length;
}
//console.log(findAverageScore(submissions));

///////////////////////////////////////////////////////////////////////Part Nine//////////////////////////////////////////////////////////////////////
function filterPassing(array) {
  let pass = array.filter((array) => array.passed === true);
  {
    console.log(pass);
    return;
  }
}
//filterPassing(submissions);

///////////////////////////////////////////////////////////////////////Part Ten//////////////////////////////////////////////////////////////////////
function filter90AndAbove(array) {
  let pass = array.filter((array) => array.score >= 90);
  {
    console.log(pass);
    return;
  }
}
//filter90AndAbove(submissions);

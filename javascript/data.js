fetch("../data/data.json")
  .then(res => res.json())
  .then(data => {
    showQuestion(data.questions[0]);
  })
  .catch(err => console.error(err));

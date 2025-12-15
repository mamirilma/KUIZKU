fetch("../data/quiz-list.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("quizContainer");

    data.quizzes.forEach(quiz => {
      const card = document.createElement("div");
      card.className = "card-kuis-1";

      card.innerHTML = `
        <div class="kuis-1-img">
          <img src="${quiz.image}" alt="${quiz.title}">
        </div>
        <h3 class="kuis-1-judul">${quiz.title}</h3>
        <p class="kuis-1-admin">by ${quiz.author}</p>
      `;

      card.onclick = () => {
        alert("Masuk kuis: " + quiz.title);
        // nanti redirect ke halaman kuis
      };

      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));

function handleSearch() {
    let Input = document.querySelector("input");
    let searchId = Input.value.toLowerCase();

    let movieCard = document.querySelectorAll(".movie-card");

    movieCard.forEach((card) => {
      let title = card.querySelector(".title").textContent.toLowerCase();
      if (title.includes(searchId)) {
        card.classList.add("show");
        card.classList.remove("hide");
      } else {
        card.classList.remove("show");
        card.classList.add("hide");
      }
    });
  }
// let Input = document.querySelector("input");
// let searchId = Input.value;

// let movieCards = document.querySelectorAll(".movie-card");

// movieCards.forEach((card) => {
//   let title = card.querySelector(".title").textContent.toLowerCase();

//   if (title.includes(searchId)) {
//     card.style.display = "flex";
//   } else {
//     card.style.display + "none";
//   }
// });

// a.forEach((b) => {
//   console.log(b);
//   if (b.title.toLowerCase().includes(searchId.toLowerCase())) {
//     b.movie-card.style.display = "flex";
//   } else {
//     b.movie-card.style.display = "none";
//   }
// });
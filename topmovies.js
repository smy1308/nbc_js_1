// function ajax() {
//   fetch(
//     "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
//   )
//     .then(function (response) {
//       if (response.status != 200) {
//         alert("서버와의 통신에 실패했습니다");
//       } else {
//         return response.json();
//       }
//     })
//     .then(function (movieData) {
//       const movies = movieData.results;
//       console.log(movies);

//       for (let i = 0; i < movies.length; i++) {
//         let original_title = movies[i].original_title;
//         let overview = movies[i].overview;
//         let vote_average = movies[i].vote_average;
//       }
//     });
// }

// (function () {
//   ajax();
// })();
// function ajax() {

//     fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1").then(function(response) {
//         console.log(response);
//     })
// }

// (function() {
//     ajax();
// })();

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGYyYzI2MmIyZjY5MjgzM2M3YjQzMTFiYzMyY2RkMyIsInN1YiI6IjY1MmYzZjBkMGNiMzM1MTZmNzQ5NTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jQjodrhRL3BU25555rbz1ElR3T8gExcJso_HmZTOgB0'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
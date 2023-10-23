let a = [];
      (function () {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjg1OGNiNzE4Zjc3NGJiZTEzOTk2MTQzZWEyOTlhZSIsInN1YiI6IjY1MzA5ODAwMzBmNzljMDBjNGFjNGEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TlO9i5wEiYoCFkOsh-M8Y2-GiRM_KMMnwI3lURwOgck",
          },
        };
        fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          options
        )
          .then(function (response) {
            if (response.status != 200) {
              alert("서버와의 통신에 실패했습니다");
            } else {
              return response.json();
            }
          })
          .then((movieData) => {
            const movies = movieData.results;
            const movieList = document.querySelector(".movieList");

            movieList.innerHTML = movies
              .map((movie) => {
                const { title, vote_average, overview, poster_path, id } =
                  movie;
                const baseurl = "http://image.tmdb.org/t/p/w500";
                const poster = baseurl + poster_path;

                return `
                <div class="movie-card" onclick="msg(${id})">
                <img src="${poster}"/>
                <h3 class="title">${title}</h3>
                <h4 class="vote_average">${vote_average}</h4>
                <h4 class="overview">${overview}</h4>
                <h6 class="poster_path">${poster_path}</h6>
                </div>
                `;
              })
              .join("");
          });
      })();
      function msg(id) {
        alert("id: " + id + " 입니다.");
      }


// let a = [];
//       function ajax() {
//         const options = {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjg1OGNiNzE4Zjc3NGJiZTEzOTk2MTQzZWEyOTlhZSIsInN1YiI6IjY1MzA5ODAwMzBmNzljMDBjNGFjNGEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TlO9i5wEiYoCFkOsh-M8Y2-GiRM_KMMnwI3lURwOgck",
//           },
//         };
//         fetch(
//           "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
//           options
//         )
//           .then(function (response) {
//             if (response.status != 200) {
//               alert("서버와의 통신에 실패했습니다");
//             } else {
//               return response.json();
//             }
//           })
//           .then(function (movieData) {
//             const movies = movieData.results;
//             console.log(movies);
//             let movieList = document.querySelector(".movieList");
//             for (let x = 0; x < movies.length; x++) {
//               a.push(movies[x]);
//             }
//             let tag = "";
//             for (let i = 0; i < a.length; i++) {
//               let title = a[i].title;
//               let vote_average = a[i].vote_average;
//               let overview = a[i].overview;
//               let poster_path = a[i].poster_path;
//               let id = a[i].id;
//               const baseurl = "http://image.tmdb.org/t/p/w500";
//               const poster = baseurl + a[i].poster_path;
//               tag += `<div class="movie-card" onclick="msg(${id})">`;
//               tag += '<img src="' + poster + '"/>';
//               tag += '<h2 class="title">' + title + "</h2>";
//               tag += '<h4 class="vote_average">' + vote_average + "</h4>";
//               tag += '<h4 class="overview">' + overview + "</h4>";
//               tag += '<h6 class="poster_path">' + poster_path + "</h6>";
//               tag += "</div>";
//             }
//             movieList.innerHTML = tag;
//           });
//       }
//       (function () {
//         ajax();
//       })();
//       function msg(id) {
//         alert("id: " + id + " 입니다.");
//       }
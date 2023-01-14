import { movieID, url, imgPath, movieDetailsData } from "./Vars.js";

function getMovie(id) {
  let movieUrl = `${url}/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
  /************************************ with jQuery ************************************/
  $.get(movieUrl).done((data) => {
    const { title, poster_path, overview } = data; //Distracting
    const movieElement = $("<div class=\"container\"></div>");
    movieElement.html(`
                      <img src="${imgPath + poster_path}" alt="Move" />
                      <div>
                        <h3 id="moveName">${title}</h3>
                        <p>${overview}</p>
                      </div>
                      `);
    $(movieDetailsData).append(movieElement);
  });
  /************************************ with JavaScript ES6 ************************************/
  /* fetch(movieUrl)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const { title, poster_path, overview } = data; //Distracting
      const movieElement = document.createElement("div");
      movieElement.classList.add("container");
      movieElement.innerHTML = `
                    <img src="${imgPath + poster_path}" alt="Move" />
                        <div>
                        <h3 id="moveName">${title}</h3>
                    <p>${overview}</p>
                    </div>
                    `;
      movieDetailsData.appendChild(movieElement);
    }); */
}
getMovie(movieID);

//the bad one
//DetailsPage
// movieID = location.search.split("=")[1];
// const movieDetailsData = document.getElementById("movieData");

//https://api.themoviedb.org/3/movie/436270?api_key=9813ce01a72ca1bd2ae25f091898b1c7

// url + "/movie/" + id +"?api_key=9813ce01a72ca1bd2ae25f091898b1c7"

// function getMoviesDetails(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       data.results.forEach((movie) => {
//         if (movie.id == movieID) {
//           const { title, poster_path, overview } = movie; //Distracting
//           const movieElement = document.createElement("div");
//           movieElement.classList.add("container");
//           movieElement.innerHTML = `
//               <img src="${imgPath + poster_path}" alt="Move" />
//                   <div>
//                   <h3 id="moveName">${title}</h3>
//               <p>${overview}</p>
//               </div>
//               `;
//           movieDetailsData.appendChild(movieElement);
//         }
//       });
//     });
// }

// getMoviesDetails(apiUrl);

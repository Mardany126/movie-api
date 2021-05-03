const express = require("express")
const movies = require("./movies")
const { response } = require("express")
const app = express()

app.get("/", (request, response) => {
  return response.send("Movies")
})

app.get(
  "/movies",
  (getMovies = (request, response) => {
    return response.send(movies)
  })
)

app.get("/movies/:title", (request, response) => {
  const movieTitle = movies.find((movie) => movie.title)

  if (movieTitle.includes(request.params.title))
    return response.send(movieTitle)
})

app.get("/movies/:directors", (request, response) => {
  const movieDirector = movies.find((movie) =>
    movie.directors.includes(movie.directors[0])
  )

  // console.log(movies)
  // console.log(movies[0])
  console.log(request.params)

  if (movieDirector.includes(request.params.directors))
    console.log(request, response)
  return response.send(movieDirector)
})

app.listen(1400, () => {
  console.log("Listening on port 1400...") //eslint-disable-line no-console
})

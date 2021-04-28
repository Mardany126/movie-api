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

app.listen(1400, () => {
  console.log("Listening on port 1400...") //eslint-disable-line no-console
})

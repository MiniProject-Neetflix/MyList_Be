const { default: axios } = require("axios");
const express = require("express");
const port = process.env.PORT || 3002;
const mylistRouter = require("./Router/Mylist");
const app = express();

app.use(express.json());
app.use(mylistRouter);

app.get("/get_movie", async (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=cf1e9268a40ecb14132ec37b647fc372&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    )
    .then((response) => {
      res.status(200).json({ message: "Succes", data: response.data });
    })
    .catch((err) => {
      res.status(422).json({ message: err.message });
    });
});

app.listen(port, () => console.log(`Listening at port ${port}`));

module.exports = app;

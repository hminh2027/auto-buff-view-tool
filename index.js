// https://www.4gamers.vn/site/api/news/hit/2321

const { default: axios } = require("axios");
const express = require("express");
const path = require("path");
const { getReq } = require("./utils/axios");
// initiate
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// router
app.get("/", (req, res) => {
  getReq("/", "163.116.177.43", 808);

  res.render("index");
});

// app.post("/", async (req, res) => {
//   const { id } = req.body;
//   setInterval(async () => {
//     try {
//       await axios.post(`https://www.4gamers.vn/site/api/news/hit/${id}`);
//       console.log("called");
//     } catch (e) {
//       console.log("e");
//     }
//   }, 7000);
//   res.render("index");
// });

app.listen(process.env.PORT || 8000, () => {
  console.log("Server started!");
});

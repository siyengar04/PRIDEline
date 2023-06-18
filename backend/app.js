// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const https = require('https');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// https.get('https://newsapi.org/v2/everything?q=tesla&from=2023-05-16&sortBy=publishedAt&apiKey=bb24aec85dca4267bb4ac708e3aa9a18', (resp) => {
//   let data = '';

//   resp.on('data', (chunk) => {
//     data += chunk;
//   });
//   resp.on('end', () => {
//   console.log(JSON.parse(data).explanation);
// });
// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static("../frontend/build"));

app.get("/", (res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.post("/books", async (req, res) => {
  try {
    const genre = req.body.genre; // Retrieve genre from request body
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=LGBTQ+${genre}&maxResults=40`; // Google Books API URL

    const response = await axios.get(apiUrl);
    const books = response.data.items.map((item) => ({
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors
        ? item.volumeInfo.authors.join(", ")
        : "Unknown Author",
      description: item.volumeInfo.description,
      thumbnail: item.volumeInfo.imageLinks
        ? item.volumeInfo.imageLinks.thumbnail
        : null,
      infoLink: item.volumeInfo.infoLink,
      previewLink: item.volumeInfo.previewLink,
    }));

    res.json(books);
  } catch (error) {
    console.error("Error searching books by genre:", error.message);
    res.status(500).json({ error: "Error searching books by genre" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

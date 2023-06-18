//Express server backend for the PRIDEline app
const express = require("express");
const path = require("path");
const axios = require("axios");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
// Serve the React static files after build
app.use(express.static("./client/build"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
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

// All other unmatched requests will return the React app
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

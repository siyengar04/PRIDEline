var express = require('express');
var app = express();
var debug = require('debug')('backend:server');
var http = require('http');
var bodyParser = require('body-parser'); // Add this line

app.use(bodyParser.json()); // Add this line to parse request body as JSON

app.get('/books', async (req, res) => {
  try {
    const searchTerm = req.query.q; // Retrieve search term from query parameters
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`; // Google Books API URL

    const response = await axios.get(apiUrl);
    const books = response.data.items.map((item) => ({
      title: item.volumeInfo.title,
      subject: item.volumeInfo.subject,
      author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
      description: item.volumeInfo.description,
      thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null,
      link: item.selfLink
    }));

    res.json(books);
  } catch (error) {
    console.error('Error grabbing books:', error.message);
    res.status(500).json({ error: 'Error grabbing books' });
  }
});

app.post('/books', (req, res) => {
  try {
    const genre = req.body.genre; // Retrieve the genre from the request body
    // Process the genre as needed (e.g., store it in a database)
    console.log('Received genre:', genre);

    res.json({ message: 'Genre received' });
  } catch (error) {
    console.error('Error receiving genre:', error.message);
    res.status(500).json({ error: 'Error receiving genre' });
  }
});

var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

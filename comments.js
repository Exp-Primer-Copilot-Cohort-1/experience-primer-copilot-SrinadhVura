// Create web server
var express = require('express');
var app = express();

// Load comments
app.get('/', function(req, res) {
  res.send('Comments');
});

// Create server
var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port);
});
```

```shell
$ node comments.js
Server running at http://localhost:3000
```

## Express: Route Parameters

```javascript
// Path: comments.js
// Create web server
var express = require('express');
var app = express();

// Load comments
app.get('/', function(req, res) {
  res.send('Comments');
});

// Load comment
app.get('/:id', function(req, res) {
  res.send('Comment ' + req.params.id);
});

// Create server
var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port);
});
```

```shell
$ node comments.js
Server running at http://localhost:3000
```

## Express: Route Handlers

```javascript
// Path: comments.js
// Create web server
var express = require('express');
var app = express();

// Load comments
app.get('/', function(req, res) {
  res.send('Comments');
});

// Load comment
app.get('/:id', function(req, res) {
  res.send('Comment ' + req.params.id);
});

// Create server
var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port);
});
```

```shell
$ node comments.js
Server running at http://localhost:3000
```

## Express: Middleware

```javascript
// Path: comments.js
// Create web server
var express = require('express');
var app = express();

// Middleware
app.use(function(req, res, next) {
  console.log('Request: ' + req.url);
  next();
});

// Load comments
app.get('/', function(req, res) {
  res.send('Comments');
});

// Load comment
app.get('/:id', function(req, res) {
  res.send('Comment ' + req.params.id);
});

// Create server
var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port);
});
``
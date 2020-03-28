const express = require('express'); // import the express package

const server = express(); // creates the server

// handle requests to the root of the API, the / route
server.get('/', (req, res) => {
    res.send('Hello Hello from Express');
});

// watch for connections on port 5000
server.listen(5000, () =>
    console.log('Server running on http://localhost:5000')
);

// when using Express to build a server, always remember to npm init -y and npm install express or ERROR
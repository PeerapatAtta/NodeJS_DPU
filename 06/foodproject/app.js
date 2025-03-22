// Purpose: To create a server and listen to requests on port 8000

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port, '127.0.0.1', () => {
  console.log(`Listening to request on port ${port}`);
});

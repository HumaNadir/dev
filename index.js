// Import the built-in HTTP module
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Server is live");
  } else if (req.url === "/user") {
    res.statusCode = 200;
    res.end("user route");
  } else if (req.url === "/users") {
    res.statusCode = 200;
    res.end("users route");
  } else {
    res.statusCode = 404;
    res.end("404: Page not found");
  }
});

server.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});

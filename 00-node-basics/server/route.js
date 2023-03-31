const http = require("http");
const fs = require("fs");

const PORT = 4000;
const HOST = "localhost";

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end(home);
  } else if (request.url === "/about") {
    response.end("<h1 style='font-family: Arial'>About Page</h1>");
  } else {
    response.end(
      "<h1 style='font-family: Arial; color: #FC6E68'>404 Page Not Found</h1>"
    );
  }
  // response.end("Working...");
});

server.listen(PORT, HOST, () => {
  console.log(`Server is working on http://${HOST}:${PORT}`);
});

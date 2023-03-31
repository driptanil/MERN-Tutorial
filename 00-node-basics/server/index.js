const http = require("http");
const PORT = 4000;
const HOST = "localhost";

const server = http.createServer((request, response) => {
  console.log(request.url);

  response.end("Working...");
});

server.listen(PORT, HOST, () => {
  console.log(`Server is working on http://${HOST}:${PORT}`);
});

const { createServer } = require("http");
const { parse } = require("url");
const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname;
  if ((pathName === "/")) {
    res.end("Hello World");
  } else if ((pathName === "/test")) {
    res.end("Test");
  } else {
    res.end("The url not be found");
  }
});
server.listen(8000, () => console.log("Listening for request on port 8000"));

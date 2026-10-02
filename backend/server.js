const http = require('http');
http.createServer((req, res) => {
   res.write("Backend server running!");
   res.end();
}).listen(3000);

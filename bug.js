const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    // Here's the problem: we're not handling the error properly!
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  });
});

async function doSomethingAsync() {
  // Simulate an error that may occur during asynchronous operation
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  // Simulate some asynchronous work
  await new Promise(resolve => setTimeout(resolve, 100));
}

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
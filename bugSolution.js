const http = require('http');

const server = http.createServer((req, res) => {
  doSomethingAsync()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Internal Server Error: ${error.message}`);
    });
});

async function doSomethingAsync() {
  try {
    if (Math.random() < 0.5) {
      throw new Error('Something went wrong!');
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  } catch (error) {
    throw error; // Re-throw to be caught by the main handler
  }
}

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
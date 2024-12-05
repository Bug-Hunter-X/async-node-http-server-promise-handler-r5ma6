# Unhandled Promise Rejection in Asynchronous Node.js HTTP Server

This repository demonstrates a common error in asynchronous Node.js applications: unhandled promise rejections in HTTP servers.

The `bug.js` file contains code that creates an HTTP server with an asynchronous operation.  If the asynchronous operation throws an error, the error is not handled correctly, leading to a potentially unstable server.

The `bugSolution.js` file provides a solution that uses proper error handling to gracefully manage exceptions and provide informative error responses to the client.

## How to Reproduce the Bug
1. Clone this repository.
2. Run `node bug.js`.
3. Make multiple requests to `http://localhost:3000/`. You'll notice that sometimes the server responds with an Internal Server Error with no detailed information.  The server may also crash in certain circumstances.

## How the Solution Works
The improved code in `bugSolution.js` addresses the issue by properly handling the error using a `try...catch` block within the async function or by attaching a `.catch()` handler to the promise.  This ensures that exceptions are caught and that appropriate error responses are sent to the client.
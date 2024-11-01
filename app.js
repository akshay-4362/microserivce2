// Import Express module
const express = require('express');
const app = express();

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.setHeader('Connection', 'keep-alive');
//     res.setHeader('Keep-Alive', 'timeout=30');
//     next();
// });
// Define a simple GET route
const myObj=[
  {
    "name": "Test",
    "work": "test"
  }
]
app.get('/ms2', (req, res) => {
  res.json({myObj});
});

// Set up the server to listen on port 3000
const PORT = 3001;
const server =  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// server.keepAliveTimeout = 30 * 1000; // <- important lines
// server.headersTimeout = 35 * 1000;

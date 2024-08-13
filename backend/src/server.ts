import app from './app';

// Define the port to run the server on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  `Server is running on port ${PORT}`;
});

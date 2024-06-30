import app from "./app.js";

import dbConnection from "./dbConfig/dbConnection.js";

// MONGODB CONNECTION
dbConnection();
// Test 2

const PORT = process.env.PORT || 8800;

const server = app.listen(PORT, () => {
  console.log(`Test`);
  console.log(`Dev Server running on port test: ${PORT}`);
});

export default server;

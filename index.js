const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ CORS Headers Middleware (For Cross-Origin Requests)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.post('/api/logTransaction', (req, res) => {
  const { email, otp, txHash } = req.body;

  if (!email || !otp || !txHash) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log('Received transaction:', { email, otp, txHash });

  // You can log this to a database or external service here
  // Example: saveToDatabase(email, otp, txHash);

  res.status(200).json({ message: 'Transaction logged successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

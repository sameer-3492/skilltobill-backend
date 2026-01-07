// src/server.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import cors from 'cors';  // <-- ES Module style
import app from './app.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const PORT = process.env.PORT || 5000;

// ------------------
// CORS Setup
// ------------------
app.use(cors({
    origin: 'https://skilltobill.onrender.com'  // frontend URL
}));

app.use(express.json()); // ensure JSON body parsing

// ------------------
// Connect DB + Start Server
// ------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch(err => {
    console.error('DB error:', err.message);
    process.exit(1);
  });

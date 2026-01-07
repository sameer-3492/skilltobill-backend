// src/server.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import app from './app.js'; // tumhara existing express routes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const PORT = process.env.PORT || 5000;

// ------------------
// CORS Setup
// ------------------
app.use(cors({
    origin: 'https://skilltobill.onrender.com',  // frontend URL
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true
}));
app.options('*', cors()); // handle preflight requests

app.use(express.json()); // parse JSON body

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


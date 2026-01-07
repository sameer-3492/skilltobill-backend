// src/server.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import app from './app.js';  // tumhara routes / middleware defined app

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({ path: path.join(__dirname, '../.env') });

// ------------------
// Express Middlewares
// ------------------
app.use(express.json()); // parse JSON bodies
app.use(cors({
    origin: 'https://skilltobill.onrender.com', // frontend URL
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    credentials: true
}));

// ------------------
// MongoDB + Server
// ------------------
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
})
.catch(err => {
    console.error('DB error:', err.message);
    process.exit(1);
});

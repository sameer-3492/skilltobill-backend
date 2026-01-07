// src/server.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import app from './app.js'; // routes defined here

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env
dotenv.config({ path: path.join(__dirname, '../.env') });

// ------------------
// Express middlewares
// ------------------
app.use(express.json());

// Full CORS setup
app.use(cors({
    origin: 'https://skilltobill.onrender.com', // frontend URL
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true
}));

// Handle OPTIONS preflight request for all routes
app.options('*', cors({
    origin: 'https://skilltobill.onrender.com',
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true
}));

// ------------------
// MongoDB + server start
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

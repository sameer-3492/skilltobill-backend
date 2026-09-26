import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import authRoutes from './routes/auth.routes.js';
import serviceRoutes from './routes/service.routes.js';
import orderRoutes from './routes/order.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import notificationRoutes from './routes/notification.routes.js';
import contactRoutes from './routes/contact.routes.js';

const app = express();

// ------------------
// Middleware
// ------------------
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));

// ------------------
// CORS
// ------------------
const allowedOrigins = [
  'https://skilltobill.onrender.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.FRONTEND_URL // Railway में environment variable से
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // mobile apps or curl
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // Check regex patterns for Render subdomains
    if (origin.match(/^https?:\/\/[a-zA-Z0-9-]*\.?skilltobill\.onrender\.com(:\d+)?$/)) {
      return callback(null, true);
    }
    
    // Allow localhost development
    if (origin.match(/^https?:\/\/127\.0\.0\.1(:\d+)?$/) || origin.match(/^https?:\/\/localhost(:\d+)?$/)) {
      return callback(null, true);
    }
    
    console.warn(`CORS rejected origin: ${origin}`);
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
}));

// ------------------
// Root + Health check
// ------------------
app.get('/', (req, res) => {
  res.send('SkillToBill Backend is live 🚀');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// ------------------
// API Routes
// ------------------
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/contact', contactRoutes);

// ------------------
// Error Handling
// ------------------
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

export default app;

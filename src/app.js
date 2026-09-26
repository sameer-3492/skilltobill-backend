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
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // mobile apps or curl
    // Allow frontend deployed domain
    if (origin.match(/^https?:\/\/[a-zA-Z0-9-]*\.?skilltobill\.onrender\.com(:\d+)?$/)) return callback(null, true);
    // Allow local dev
    if (origin.match(/^https?:\/\/127\.0\.0\.1(:\d+)?$/)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
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

export default app;

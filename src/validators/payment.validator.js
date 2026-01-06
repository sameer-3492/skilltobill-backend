// validators/payment.validator.js
import Joi from 'joi';

export const paymentSchema = Joi.object({
  orderId: Joi.string().required(),
});

export const validatePayment = (req, res, next) => {
  const { error } = paymentSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

// validators/order.validator.js
import Joi from 'joi';

export const orderSchema = Joi.object({
  serviceId: Joi.string().required(),
  clientId: Joi.string().required(),
  amount: Joi.number().required(),
});

export const validateOrder = (req, res, next) => {
  const { error } = orderSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

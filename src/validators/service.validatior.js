// validators/service.validator.js
import Joi from 'joi';

export const serviceSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
});

export const validateService = (req, res, next) => {
  const { error } = serviceSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

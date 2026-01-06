import Service from '../models/Service.js';

export const createService = async (req, res) => {
  const service = await Service.create({
    ...req.body,
    earner: req.user._id
  });
  res.status(201).json(service);
};

export const getServices = async (req, res) => {
  const services = await Service.find().populate('earner', 'name');
  res.json(services);
};

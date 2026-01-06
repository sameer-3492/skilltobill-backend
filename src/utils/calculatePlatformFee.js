// utils/calculatePlatformFee.js
export const calculatePlatformFee = (amount) => {
  const feePercentage = 0.12; // 12%
  return amount * feePercentage;
};

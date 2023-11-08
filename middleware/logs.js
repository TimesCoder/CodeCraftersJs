const logRequest = (req, res, next) => {
  console.log(`Log request ${req.path}path Use ${req.method} method`);
  next();
};

export default logRequest;

const authenticate = (req, res, next) => {
  console.log("authenticated");
  // return res.json({});
  req.verified = false;
  next();
};
module.exports = authenticate;

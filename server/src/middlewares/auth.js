const jwt = require("jsonwebtoken");
const User = require("../models/user");

const TEN_MINUTES = 1000 * 60 * 10;

const auth = async (req, res, next) => {
  
  const token = req.cookies.myToken;
  if (!token) {
    return res.status(401);
  }

  let payload, createDate
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
    if (!payload) {
      throw new Error(`Invalid token`);
    }
    // token create date
    createDate = new Date(payload.created);
  } catch {
    // !jwt = status401
    return res.status(401);
  }

  // check token time from creation (<10 next()
  if (Date.now() - createDate < TEN_MINUTES) {
    req.user = payload.user;
    return next();
  } 

  const user = await User.findById( payload._id)

  // if (!(user &&
  //   user.authenticationMethods && 
  //   user.authenticationMethods.created === payload.created &&
  //   user.authenticationMethods.identifier === payload.identifier
  //   )) {
  //   return res.status(401)
  // }

  // const newPayload = {
  //   user: {id: user.id},
  //   created: new Date.toJSON(),
  //   identifier: "myIdentifier"
  // }

  req.token = token;
  req.user = user;
  next();
};

module.exports = auth;

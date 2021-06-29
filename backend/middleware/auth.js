const { verify } = require("jsonwebtoken");

exports.isLoggedIn = (req, res, next) => {
  let header = req.header("authorization");
  // console.log('hello');
  if (!header) {
    return res.json({
      error: {
        code: "auth/not-logged-in",
      },
    });
  }
  let token = header.split(" ")[1];
  try {
    let user = verify(token, process.env.SECRET);
    if (user) {
      req.user = user;
      next();
      return;
    }
  } catch (err) {
    return res.json({
      error: {
        code: "auth/not-logged-in",
      },
    });
  }
};

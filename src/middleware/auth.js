import jwt from "jsonwebtoken";

function Auth(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(401).json({ message: "missing token" });

    const fragmentedToken = authorization.split(" ");

    if (fragmentedToken.length !== 2)
      return res.status(403).json({ message: "Poorly structured token" });

    const [bearer, token] = fragmentedToken;

    if (!/^Bearer/i.test(bearer))
      return res.status(403).json({ message: "Poorly structured token" });

    jwt.verify(token, process.env.TOKEN_ENCRYPT, (error, decod) => {
      console.log(error);
      if (error) return res.status(401).json({ message: "Invalid token" });

      req.userId = decod.id;
      return next();
    });
  } catch ({ message }) {
    return res.status(404).json({ message });
  }
}

export default Auth;

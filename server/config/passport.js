import pkg from "passport-jwt";
import dotenv from "dotenv";

import User from "../models/User.js";

dotenv.config();

const JwtStrategy = pkg.Strategy;
const ExtractJwt = pkg.ExtractJwt;

var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

export default (passport) =>
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById({ _id: jwt_payload.id }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }),
  );

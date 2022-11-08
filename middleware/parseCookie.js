"use strict";

export default function parseCookie(req, res, next) {
  const cookie = req.cookies;

  req.headers["authorization"] = `Bearer ${cookie.accessToken}`;

  next();
}

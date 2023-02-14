import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/default.json';
import { NEGATIVE_MESSAGES, STATUS_CODE } from '../common/helpers/constants';

export default async function authJwt(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const jwtToken = req.headers.authorization?.split(' ')[1];

    if (!jwtToken) {
      return res
        .status(STATUS_CODE.ClientErrorUnauthorized)
        .json({ message: NEGATIVE_MESSAGES.noAuthorization });
    }

    const payload = jwt.verify(jwtToken, config.jwtSecretKey);

    req.body.payload = payload;
    next();
  } catch (err) {
    return res
      .status(STATUS_CODE.ClientErrorUnauthorized)
      .json({ message: NEGATIVE_MESSAGES.noAuthorization });
  }
}

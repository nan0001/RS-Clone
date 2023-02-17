import { Request, Response, NextFunction } from 'express';
import { NEGATIVE_MESSAGES, STATUS_CODE } from '../common/helpers/constants';

export default async function addDate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.method !== 'POST') {
    return next();
  }

  try {
    req.body.date = Date.parse(new Date().toString()) / 1000;

    next();
  } catch (err) {
    return res
      .status(STATUS_CODE.ClientErrorUnauthorized)
      .json({ message: NEGATIVE_MESSAGES.noAuthorization });
  }
}

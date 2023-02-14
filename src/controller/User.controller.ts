import { RequestHandler } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import {
  ERR_MESSAGES,
  NEGATIVE_MESSAGES,
  POSITIVE_MESSAGES,
  STATUS_CODE,
} from '../common/helpers/constants';
import User from '../models/User.model';

export default class AuthController {
  getUserData: RequestHandler = async (req, res) => {
    try {
      const payload: JwtPayload = req.body.payload;

      const candidate = await User.findOne({ id: payload.id });

      if (!candidate) {
        return res
          .status(STATUS_CODE.ServerErrorInternal)
          .json({ message: NEGATIVE_MESSAGES.noData });
      }

      return res.status(STATUS_CODE.SuccessOK).json({
        message: POSITIVE_MESSAGES.successGetData,
        data: candidate.data,
      });
    } catch (err) {
      return res
        .status(STATUS_CODE.ServerErrorInternal)
        .json({ message: ERR_MESSAGES.default });
    }
  };

  postUserData: RequestHandler = async (req, res) => {
    try {
      const payload: JwtPayload = req.body.payload;
      const newData = req.body.data;

      const updatedUser = await User.updateOne(
        { login: payload.login },
        {
          data: { text: newData },
        },
      );
      return res.status(STATUS_CODE.SuccessAccepted).json({
        message: POSITIVE_MESSAGES.updateData,
        updatedUser,
      });
    } catch (err) {
      console.log(err);

      return res
        .status(STATUS_CODE.ServerErrorInternal)
        .json({ message: ERR_MESSAGES.default });
    }
  };
}

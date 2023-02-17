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

      const candidate = await User.findOne({ login: payload.login });

      if (!candidate) {
        return res
          .status(STATUS_CODE.ServerErrorInternal)
          .json({ message: NEGATIVE_MESSAGES.noData });
      }

      return res.status(STATUS_CODE.SuccessOK).json({
        message: POSITIVE_MESSAGES.successGetData,
        data: candidate.data,
        timeHasPassed:
          Date.parse(new Date().toString()) / 1000 - candidate.date,
      });
    } catch (err) {
      return res
        .status(STATUS_CODE.ServerErrorInternal)
        .json({ message: ERR_MESSAGES.default });
    }
  };

  getAllUserCookies: RequestHandler = async (req, res) => {
    try {
      const candidates = await User.find();

      if (!candidates) {
        return res
          .status(STATUS_CODE.ServerErrorInternal)
          .json({ message: NEGATIVE_MESSAGES.noData });
      }

      const dataArr = candidates.map((candidate) => {
        return {
          login: candidate.login,
          cookies: candidate.data?.cookiesCount,
        };
      });

      return res.status(STATUS_CODE.SuccessOK).json({
        message: POSITIVE_MESSAGES.successGetData,
        data: dataArr,
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
      const dateOffUser = req.body.date;

      const candidate = await User.findOne({ login: payload.login });

      if (!candidate) {
        return res
          .status(STATUS_CODE.ServerErrorInternal)
          .json({ message: NEGATIVE_MESSAGES.noData });
      }

      const updatedUser = await User.updateOne(
        { login: payload.login },
        {
          data: newData,
          date: dateOffUser,
        },
      );
      return res.status(STATUS_CODE.SuccessAccepted).json({
        message: POSITIVE_MESSAGES.updateData,
        updatedUser,
      });
    } catch (err) {
      return res
        .status(STATUS_CODE.ServerErrorInternal)
        .json({ message: ERR_MESSAGES.default });
    }
  };
}

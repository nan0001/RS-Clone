import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import { RequestHandler } from 'express';
import User from '../models/User.model';

import {
  ERR_MESSAGES,
  NEGATIVE_MESSAGES,
  POSITIVE_MESSAGES,
  STATUS_CODE,
} from '../common/helpers/constants';
import getAccessToken from '../common/helpers/getAccessToken';

const CONSTANTS = {
  hashLength: 12,
};

export default class AuthController {
  createUser: RequestHandler = async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(STATUS_CODE.ClientErrorBadRequest).json({
          errors: errors.array(),
          message: NEGATIVE_MESSAGES.invalidData,
        });
      }

      const { login, password } = req.body;
      const candidate = await User.findOne({ login });

      if (candidate) {
        return res
          .status(STATUS_CODE.ClientErrorBadRequest)
          .json({ message: NEGATIVE_MESSAGES.hasUser });
      }

      const hashedPassword = await bcrypt.hash(password, CONSTANTS.hashLength);
      const user = new User({ login, password: hashedPassword });

      await user.save();

      return res
        .status(STATUS_CODE.SuccessCreated)
        .json({ message: POSITIVE_MESSAGES.createUser });
    } catch (err) {
      return res
        .status(STATUS_CODE.ServerErrorInternal)
        .json({ message: ERR_MESSAGES.default });
    }
  };

  loginUser: RequestHandler = async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(STATUS_CODE.ClientErrorBadRequest).json({
          errors: errors.array(),
          message: NEGATIVE_MESSAGES.invalidData,
        });
      }

      const { login, password } = req.body;
      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res
          .status(STATUS_CODE.ClientErrorBadRequest)
          .json({ message: NEGATIVE_MESSAGES.invalidLogin });
      }

      const validPassword = await bcrypt.compare(password, candidate.password);

      if (!validPassword) {
        return res
          .status(STATUS_CODE.ClientErrorBadRequest)
          .json({ message: NEGATIVE_MESSAGES.invalidPassword });
      }

      const token = await getAccessToken(candidate.login, candidate.id);

      return res
        .status(STATUS_CODE.SuccessOK)
        .json({ message: POSITIVE_MESSAGES.loginUser, token });
    } catch (e) {
      return res
        .status(STATUS_CODE.ServerErrorInternal)
        .json({ message: ERR_MESSAGES.default });
    }
  };

  loginGuest: RequestHandler = async (req, res) => {
    try {
    } catch (err) {
      res
        .status(STATUS_CODE.ServerErrorInternal)
        .json({ message: ERR_MESSAGES.default });
    }
  };
}

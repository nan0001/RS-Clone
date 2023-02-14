import { check } from 'express-validator';
import { FIELD_TYPE, NEGATIVE_MESSAGES } from '../common/helpers/constants';
import config from '../config/default.json';

const userValidation = [
  check(FIELD_TYPE.password, NEGATIVE_MESSAGES.invalidPassword)
    .exists()
    .isString()
    .isLength({
      min: config.minLengthPassword,
    })
    .isAlphanumeric(),
];

export default userValidation;

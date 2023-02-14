import { Response } from 'express';
import { Result } from 'express-validator';
import { STATUS_CODE, NEGATIVE_MESSAGES } from './constants';

export default function checkValidation(errors: Result, response: Response) {
  if (!errors.isEmpty()) {
    return response.status(STATUS_CODE.ClientErrorBadRequest).json({
      errors: errors.array(),
      message: NEGATIVE_MESSAGES.invalidData,
    });
  }

  return;
}

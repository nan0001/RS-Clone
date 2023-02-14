export const ERR_MESSAGES = {
  default: 'Что-то пошло не так, попробуйте заново',
};

export const NEGATIVE_MESSAGES = {
  hasUser: 'Такой пользователь уже существует',
  invalidData: 'Неверные данные',
  invalidLogin: 'Некорректный логин',
  invalidPassword: 'Некорректный пароль',
  noAuthorization: 'Нет авторизации',
  noData: 'Данные отстутствуют',
};

export const POSITIVE_MESSAGES = {
  createUser: 'Пользователь создан',
  createData: 'Данные созданы',
  updateData: 'Данные обновлены',
  loginUser: 'Вы успешно вошли в систему',
  successGetData: 'Данные получены',
};

export const FIELD_TYPE = {
  password: 'password',
  userName: 'userName',
  email: 'email',
};

export enum STATUS_CODE {
  SuccessOK = 200,
  SuccessCreated,
  SuccessAccepted,
  ClientErrorBadRequest = 400,
  ClientErrorUnauthorized,
  ClientErrorNotFound = 404,
  ServerErrorInternal = 500,
  ServerErrorNotImplemented,
  ServerErrorBadGateway,
}

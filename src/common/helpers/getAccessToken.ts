import jwt from 'jsonwebtoken';
import config from '../../config/default.json';

export default async function getAccessToken(
  login: string,
  userId: string,
  lifeTime = config.jwtLifeTime,
) {
  const payload = {
    login,
    userId,
  };

  return `Bearer ${jwt.sign(payload, config.jwtSecretKey, {
    expiresIn: lifeTime,
  })}`;
}

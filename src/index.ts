// в конфиге TS отключен параметр noUnusedParameters, т.к. наданный момент мне нужны только некоторые параметры
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/default.json';
import authRouter from './route/auth.route';
import userRouter from './route/user.route';

const PORT = process.env.PORT || config.port;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

async function start() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(config.mongodbURI);

    app.listen(PORT, () => {
      console.log(`CORS-enabled web server listening on port: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();

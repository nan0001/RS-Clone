import { Schema, model } from 'mongoose';

const schema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  data: {
    cookiesCount: { type: Number, default: 0 },
    boosters: {
      doubleCost: { type: Number, default: 0 },
      changeSpeed: { type: Number, default: 0 },
      blow: { type: Number, default: 0 },
    },
    factories: {
      factoryS: {
        bought: { type: Boolean, default: false },
        level: { type: Number, default: 0 },
      },
      factoryM: {
        bought: { type: Boolean, default: false },
        level: { type: Number, default: 0 },
      },
      factoryL: {
        bought: { type: Boolean, default: false },
        level: { type: Number, default: 0 },
      },
    },
  },
  date: { type: Number, default: Date.parse(new Date().toString()) / 1000 },
});

export default model('User', schema);

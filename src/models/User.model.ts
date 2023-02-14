import { Schema, model } from 'mongoose';

const schema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  data: { text: { type: String, default: 'def' } },
});

export default model('User', schema);

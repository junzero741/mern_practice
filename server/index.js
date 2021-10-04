import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { MONGO_DB_PASSWORD } from './password.js';

import postRoutes from './routes/posts.js';

const app = express();


app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(express.json({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL = `mongodb+srv://junzero741:${MONGO_DB_PASSWORD}@cluster0.4rsyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
  .catch((err) => console.log(err.message));


// https://www.mongodb.com/cloud/atlas
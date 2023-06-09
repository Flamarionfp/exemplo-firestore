import * as dotenv from 'dotenv';
import express from 'express';
import router from './routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

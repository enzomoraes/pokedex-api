import express from 'express';
import router from './Router';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((error: any, req: any, res: any, next: any) => {
  const status = error.statusCode || 500;
  const message = !error.statusCode ? 'Internal Error' : error.message;
  res.status(status).json({ message: message });
});

export default app;

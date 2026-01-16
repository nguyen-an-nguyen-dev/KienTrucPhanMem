require('dotenv').config();
const express = require('express');

const authRoute = require('./routes/auth.route');
const queueRoute = require('./routes/queue.route');

const app = express();
app.use(express.json());

app.use('/auth', authRoute);
app.use('/queue', queueRoute);

app.get('/health', (_, res) => {
  res.json({ status: 'UP' });
});

app.listen(process.env.PORT, () => {
  console.log(`API running at http://localhost:${process.env.PORT}`);
});

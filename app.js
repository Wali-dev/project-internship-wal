require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRouter = require('./api/v1/index');
const notFoundHandler = require('./middlewares/notFoundHandler');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const { Worker } = require('bullmq');
const pushProjectToDb = require('./utils/pushProjectToDb');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// const worker = new Worker(
//   'hireFreelancer',
//   async (job) => {
//     if (job.name === 'freelancerHired') {
//       pushProjectToDb(job.data);
//     }
//   },
//   {
//     connection: {
//       host: '127.0.0.1',
//       port: 6379,
//     },
//   }
// );

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello from timesheet server',
  });
});

app.use('/api/v1', apiRouter);

app.all('*', notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;

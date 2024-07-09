
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.post('/slack/events', (req, res) => {
  if (req.body.type === 'url_verification') {
    res.send(req.body.challenge);
  } else {
    // Handle other event types here
    res.status(200).send('Event received');
  }
});

module.exports.handler = serverless(app);

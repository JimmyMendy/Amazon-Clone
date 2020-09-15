const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HPwWWAYJHq942rfFQijxxEH9iezNIHGiuPlCGNtRpHEjAQZEERXSs46C007n62EKkzXNRd0CQ1qGc47dK5cuwOb00IZuTcOZb')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (req, res) => res.status(200).send('Hello world'))

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('Payment request received >>', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "gbp",
  });

  //OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app)


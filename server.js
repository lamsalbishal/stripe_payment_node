const express = require("express");
const app = express();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")('sk_test_51Leix5ETIuVjzRSXtk9pSAXfHuUxIEQwUE57TqSb5vGeAEmNYrsFuzPmpLAauiWg6Z3tAgg7AULvuErX6OPxBWAZ006LtxU7SH');

app.use(express.static("public"));
app.use(express.json());

const apiPort = process.env.PORT || 8000;

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(apiPort, () => console.log(`Node server listening on port ${apiPort} !`));
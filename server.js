const express = require("express");
const app = express();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")(
  "sk_test_51Leix5ETIuVjzRSXtk9pSAXfHuUxIEQwUE57TqSb5vGeAEmNYrsFuzPmpLAauiWg6Z3tAgg7AULvuErX6OPxBWAZ006LtxU7SH"
);

app.use(express.static("public"));
app.use(express.json());

const apiPort = process.env.PORT || 8000;

app.post("/create-payment-intent", async (req, res) => {
  let { amount, id } = req.body;
  try {
    await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Yammy company",
      payment_method: id,
      confirm: true,
    });

    res.status(200).json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Payment failed",
      success: false,
    });
  }
});

app.get("/test", async (req, res) => {
  res.json({ message: "success" });
});

app.listen(apiPort, () =>
  console.log(`Node server listening on port ${apiPort} !`)
);

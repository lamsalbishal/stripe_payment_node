const nodeMailer = require("nodemailer");

exports.paymentStripCart = async (req, res) => {
  try {
    const body = req.body;
    const stripe = require('stripe')('sk_test_51Leix5ETIuVjzRSXtk9pSAXfHuUxIEQwUE57TqSb5vGeAEmNYrsFuzPmpLAauiWg6Z3tAgg7AULvuErX6OPxBWAZ006LtxU7SH');

    app.post('/payment-sheet', async (req, res) => {
      // Use an existing Customer ID if this is a returning customer.
      const customer = await stripe.customers.create();
      const ephemeralKey = await stripe.ephemeralKeys.create(
        {customer: customer.id},
        {apiVersion: '2022-08-01'}
      );
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'eur',
        customer: customer.id,
        automatic_payment_methods: {
          enabled: true,
        },
      });
    
      res.json({
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
        publishableKey: 'pk_test_51Leix5ETIuVjzRSXwcRKkRmlCeLldRjKcdkJnPBZvwBxS9EkAOytRVfoe6e3DUkJDuI6D0fXFvCCaUBm4AaXON4X00FELMAm5J'
      });
    });
 
  } catch (e) {}
};

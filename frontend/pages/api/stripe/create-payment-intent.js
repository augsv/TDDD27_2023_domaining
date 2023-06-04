const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

  // TODO: Fetch from domain api to verify price!
  return items.price * 100;
};

const getCurrency = (items) => {
  // TODO: NOT safe, needs proper validation and verification from api
  return items.currency.toLowerCase();
}

export default async function handler(req, res) {
  // TODO: Fix this entire thing
  const request = req.body;
  const customers = await stripe.customers.list({ limit: 100 });

  const customer = customers.data.find((customer) => {
    return customer.metadata.auth0_user_id == request.customer
  });

  const customerId = customer.id;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(request.items),
    currency: getCurrency(request.items),
    customer: customerId,
    metadata: request.items,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
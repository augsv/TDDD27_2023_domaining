const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const request = req.body;
  
  const customer = await stripe.customers.list({ 
    metadata: {
        auth0_user_id: request.customer
    },
    limit: 1
  });

  if (customer.data.length === 0) {
    // Handle case when no customer is found with the given id
    return [];
  }

  const customerId = customer.data[0].id;
  
  const paymentIntents = await stripe.paymentIntents.list({
    customer: customerId,
    limit: 5,
  });

  const charges = paymentIntents.data
    .filter((paymentIntent) => paymentIntent.status === 'succeeded')
    .map((paymentIntent) => {
      return {
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
        created: new Date(paymentIntent.created * 1000),
        domain: paymentIntent.metadata.name,
      };
    });

  res.send(JSON.stringify(charges));
};
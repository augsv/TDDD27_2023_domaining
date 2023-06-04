const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    req.query.payment_intent
  );

  const productSlug = paymentIntent.metadata.slug

  if (paymentIntent.status === 'succeeded') {
    fetch("http://api.nlu.se/listings/" + productSlug, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            soldAt: Date.now()
        })
    })
  }

  res.setHeader('Location', '/profil');
  res.status(302).send();
};
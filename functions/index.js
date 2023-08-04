const functions = require("firebase-functions");

const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const dotenv = require("dotenv");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: true}));
app.use(express.json());

dotenv.config();

app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
    // payment_method_types: ['card'],
    // payment_method: 'visa',
    automatic_payment_methods: {enabled: true},
  });
  console.log(paymentIntent.id);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    hehe: paymentIntent,
  });
});
exports.api = functions.https.onRequest(app);


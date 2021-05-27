const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const stripe = require("stripe");
const stripe = require("stripe")("sk_test_51ItaWLSCWOJDdAsh1SqFrmmoV8BrVmp7nYR4uwnKAgyyyi1w7pE5T3c86boGFP0GhweEuOSJm5iO2q2qcqVZKlwu00oojIops6")

// POINST TO REMENBER TO MAKE EXPRESS OR NODE APP

// API

// - App config
const app = express();


// - Middlewave
app.use(cors({ origin:true }));
app.use(express.json());

// - API routes
app.get('/', (request,response) => response.status(200).send('hello world'))

app.post('/payments/create',async (request, response) => {
    const total = request.query.total;

    console.log('ho gyahjghghghghj >>>>>>>>>>>>>>>>==',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientsecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

//   http://localhost:5001/clone-by-rm/us-central1/api
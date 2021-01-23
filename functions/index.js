const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require("stripe")('sk_test_51ICWXeH0pdj33Yc7X1hOePHcqVsVlNjJdpagyaHHiU2NZryXLAxwuomgqM0po7wYGe9RlR8qiwKui5ADCEFIhQ2f003q6IdWA7')

//API

//App config
const app = express();

//Middleware
app.use(cors({ origin: true}));
app.use(express.json());


//-API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment Request Recieved Boom!! for this amount>>>', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, // subunit of the currency
        currency: 'usd',
    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//-Listen command
exports.api = functions.https.onRequest(app)
//Exampl endpoint
// http://localhost:5001/mereb-643b5/us-central1/api
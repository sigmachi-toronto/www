const express = require('express');

const app = express();

require('dotenv').config();

const mailjet = require ('node-mailjet')
  .connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_PRIVATE_KEY);

// function post(request, response) {
//   const send = mailjet.post('send');
//   const requestObject = { Messages:[{
//       From: {
//           Email: request.body.email,
//           Name: request.body.name
//       },
//       To: [{
//           Email: process.env.SIGMACHI_EMAIL
//       }],
//       Subject: request.body.subject,
//       TextPart: request.body.message
//   }]};
//   send.request(requestObject).then(() => {
//     response.json({
//         success: true
//     });
//   }).catch((err) => {
//     console.log(err);
//     response.json({
//         error: err.statusCode
//     });
//   });
// }
  const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": process.env.SIGMACHI_EMAIL,
            "Name": "Beta"
          },
          "To": [
            {
              "Email": process.env.SIGMACHI_EMAIL,
              "Name": "Beta"
            }
          ],
          "Subject": "Greetings from Mailjet.",
          "TextPart": "My first Mailjet email",
          "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
          "CustomID": "AppGettingStartedTest"
        }
      ]
    });
  request
    .then((result) => {
      console.log(result.body)
    })
    .catch((err) => {
      console.log(err.statusCode)
    });


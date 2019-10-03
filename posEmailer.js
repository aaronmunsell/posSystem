// posEmailer.js
// Author: Aaron Munsell
// Date:   20191003

//  This program aims to email out finalized POS system reporting to affected parties.

const fs = require("fs");
const nodemailer = require("nodemailer");

// Read in our SMTP values.
fs.readFile("./secrets/secretkey.json", function(err, data) {
  main(JSON.parse(data)).catch(console.error);
});

async function main(rtnVal) {
  let username = rtnVal["username"];
  let password = rtnVal["password"];
  let ip = rtnVal["ip"];
  let port = rtnVal["port"];
  let secure = rtnVal["isSafe"];
  let from = rtnVal["from"];
  let to = rtnVal["to"];

  let transporter = nodemailer.createTransport({
    host: ip,
    port: port,
    secure: secure,
    tls: {
      rejectUnauthorized: false
    }
  });

  let info = await transporter.sendMail({
    from: from,
    to: to,
    subject: "node test",
    text: "Will this work?",
    html: "<h3>Hello World!</h3>"
    // attachments: [
    //   {
    //     filename: "richard_benson.png",
    //     path: "./images/richard_benson.png"
    //   }
    // ]
  });

  console.log("Message sent: %s", info.messageId);
}

import * as express from "express";
import axios from "axios";
const querystring = require('querystring');

const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const secretKey = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
const captchaUrl = "https://www.google.com/recaptcha/api/siteverify";
const demoResponse = "3452efdsafsdf";

const app = express();

const checkCaptcha = (result) => {
  // checkCaptcha
}

const sendEmail = () => {
  // sendEmail
}

const saveData = () => {
  // save Data
}


app.get("/", (request, response) => {
  const formResponse = {
    secret: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
    response: "3452efdsafsdf",
  }

  const query = querystring.stringify(formResponse);
  axios.post(captchaUrl, query).then((result) => response.send(result.data)).catch((err) => response.send("error occurred"));
});



app.listen(3000, () => {
  console.log("Express started on port 3000");
});

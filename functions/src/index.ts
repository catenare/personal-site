import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import * as firebase from 'firebase';
import axios from "axios";
const querystring = require('querystring');

const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const secretKey = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
const captchaUrl = "https://www.google.com/recaptcha/api/siteverify";
const demoResponse = "3452efdsafsdf";

// var config = {
  // apiKey: "AIzaSyA1x4Js9szv-cb1OfLz-rJ-KOS3pNaTNfM",
  // authDomain: "johan-personal.firebaseapp.com",
  // databaseURL: "https://johan-personal.firebaseio.com",
  // projectId: "johan-personal",
  // storageBucket: "johan-personal.appspot.com",
  // messagingSenderId: "554590430215"
// };
// firebase.initializeApp(config);



export const contactMe = functions.https.onRequest((request, response) => {
  const formResponse = {
    secret: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
    response: "3452efdsafsdf",
  }

  // const captcha = new firebase.auth.RecaptchaVerifier('',formResponse);
  // captcha.verify().then((res) => response.send(res));

  const query = querystring.stringify(formResponse);
  axios.post(captchaUrl, query).then((result) => response.send(result.data)).catch((err) => response.send("error occurred"));
})

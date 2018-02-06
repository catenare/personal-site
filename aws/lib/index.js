"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const axios_1 = require("axios");
const querystring = require('querystring');
const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const secretKey = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
const captchaUrl = "https://www.google.com/recaptcha/api/siteverify";
const demoResponse = "3452efdsafsdf";
const app = express();
app.get("/", (request, response) => {
    const formResponse = {
        secret: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
        response: "3452efdsafsdf",
    };
    const query = querystring.stringify(formResponse);
    axios_1.default.post(captchaUrl, query).then((result) => response.send(result.data)).catch((err) => response.send("error occurred"));
});
app.listen(3000, () => {
    console.log("Express started on port 3000");
});
//# sourceMappingURL=index.js.map
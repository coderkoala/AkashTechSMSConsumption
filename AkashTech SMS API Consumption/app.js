'use strict';

let axios = require('axios');
let dotenv = require('dotenv').config();

let parameters = {
    auth_token: process.env.auth_token,
    to: 9863032230,
    text: 'Hello World'
};



let url = `https://sms.aakashsms.com/sms/v3/send?auth_token=${parameters.auth_token}&to=${parameters.to}&text=${parameters.text}`;

// Make a post request with axios
axios.post(url).then(function (response) {
    console.dir(response.data);
}).catch(function (error) {
    console.dir(error);
});

setTimeout(() => { console.log(process.env.auth_token) }, 10000);
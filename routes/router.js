const { model } = require('mongoose');
const GeneratenewshortURl=require("../controller/control");
const express = require('express');
const router = express.Router();

router.post('/',GeneratenewshortURl);
module.exports = GeneratenewshortURl;
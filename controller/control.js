const URL =require('../models/schema');
const shortid = require('shortid');

//controller
const GeneratenewshortURl = async(req,res)=>{
    const body = req.body;
    const ShortId = shortid();

    await URL.create({
        ShortID: ShortId,
        RedirectUrl:body.url
    })
}
const redirecttoOriginalPage =('./shortid',async(req,res)=>{
const shortid })

module.exports =GeneratenewshortURl;
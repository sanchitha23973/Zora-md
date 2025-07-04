const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
};
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "ZORA~nA92UTzB#LJbs-Qzm1A1D3S_jFXwJFB623Gs_uG-nbOAUiBBIoFs", // SESSION_ID is required to start the bot. It must begin with 'ZORA~', Example: ZORA~youruniquesessionid
  MONGODB: process.env.MONGODB || "mongodb+srv://spro90887:<db_DPoptwuWPSACBkAw>@cluster01.cunm6jp.mongodb.net/"   // MONGODB URL is optional. Add it only if you have a valid MongoDB URI. If you don't have one, leave it empty. Do NOT insert invalid URLs – the bot won't start !!
};

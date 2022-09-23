const UserModel = require("../../Models/UserModel");
const sendMail = require("../../Utilities/sendMail");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// ============ Send Verification ============ //
const controlForgetRequest = (req, res) => {
  const {email} = req.body
  const randArr = [];
  for (let i = 0; i < 6; i++) {
    randArr.push(Math.floor(Math.random() * 10));
  }
  const verificationNumber = randArr.join("");
  sendMail({
    to: email,
    subject: "Check Your OTP Code",
    text: "Your OTP code is: " + verificationNumber,
    html: `<html>Your OTP code is: <b>${verificationNumber}</b></html>`,
  })
    .then((result) => {
      UserModel.findOne({email}).then((dbres) => {
        const salt = bcrypt.genSaltSync(10);
        const pinHash = bcrypt.hashSync(verificationNumber, salt);
        dbres.tempPinHash = pinHash;
        dbres.save();
        setTimeout(() => {
          dbres.tempPinHash = "";
          dbres.save();
        }, 1000 * 60 * 5);
      });
      res.send(
        JSON.stringify({
          status: "ok",
          data: "Don't forget to check Spam folder.",
        })
      );
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send(JSON.stringify({ status: "error", data: "Something Wrong" }));
    });
};

// ============ Confirm Verification ============ //
const controlChangePassword = (req, res) => {
  const { email, pin, password } = req.body;
  UserModel.findOne({ email }).then((dbres) => {
    const isPinMatch = bcrypt.compareSync(pin, dbres.tempPinHash);
    if (isPinMatch) {
      const salt = bcrypt.genSaltSync(10)
      const passwordHash = bcrypt.hashSync(password, salt)
      dbres.passwordHash = passwordHash;
      dbres.save().then((result) => {
        console.log(result);
        res.send(
          JSON.stringify({
            status: "ok",
          })
        );
      });
    }
  });
};
module.exports = { 
  controlForgetRequest,
  controlChangePassword 
};

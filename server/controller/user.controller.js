import User from "../model/user.model.js";
import dotenv from "dotenv";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import bcrypt from "bcrypt";

dotenv.config();

const serviceID = process.env.serviceID;
const accountSID = process.env.accountSID;
const authToken = process.env.authToken;

const client = require("twilio")(accountSID, authToken);

export const userLogin = async (req, res) => {
  try {
    const body = req.body;
    const { email, password } = body;
    const data = await User.findOne({ email });

    if (!data)
      return res
        .status(200)
        .json({ status: false, message: "Invalid Email or Password" });
    if (data?.user_type === "voter") {
      if (data) {
        bcrypt.compare(password, data.password, function (err, result) {
          // result == true
          if (result === true) {
            client.verify
              .services(serviceID)
              .verifications.create({
                to: `+977${data.phone_No}`,
                channel: "sms",
              })
              .then((result) => {
                return res
                  .status(200)
                  .json({ status: true, result: result, data: data });
              });
          } else {
            return res.status(200).json({
              status: false,
              message: err,
            });
          }
        });
      }
    } else if (data?.user_type === "candidate") {
      if (data) {
        bcrypt.compare(password, data.password, function (err, result) {
          // result == true
          if (result === true) {
            client.verify
              .services(serviceID)
              .verifications.create({
                to: `+977${data.phone_No}`,
                channel: "sms",
              })
              .then((result) => {
                return res
                  .status(200)
                  .json({ status: true, result: result, data: data });
              });
          } else {
            return res.status(200).json({
              status: false,
              message: err,
            });
          }
        });
      }
    } else if (data?.user_type === "admin") {
    } else {
      return res.status(200).json({
        status: false,
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error,
    });
  }
};

export const verifyLogin = async (req, res) => {
  const { phoneNumber, code } = req.body;
  if (code.length === 6) {
    client.verify
      .services(serviceID)
      .verificationChecks.create({
        to: phoneNumber,
        code: code,
      })
      .then((data) => {
        if (data.valid) {
          res.status(200).json({
            status: true,
            message: "User is Verified!!",
            data: data,
          });
        } else {
          return res.status(200).json({
            status: false,
            message: "Wrong phone number or code :(",
            error: error,
          });
        }
      })
      .catch((error) => {
        res.status(200).json({
          status: false,
          message: "Wrong phone number or code :(",
          error: error,
        });
      });
  } else {
    res.status(200).json({
      status: false,
      message: "Wrong phone number or code :(",
      phoneNumber: phoneNumber,
    });
  }
};

export const userRegister = async (req, res) => {
  try {
    const body = req.body;
    const file = req.file;
    const saltRounds = 10;

    const { email, phone_No, user_type, citizenship_no, password } = body;
    let userData;
    let picture_url = new Date().toUTCString() + file?.filename;

    console.log(picture_url);

    const checkEmail = await User.findOne({ email });
    const checkPhoneNo = await User.findOne({ phone_No });
    const checkCitizenshipNo = await User.findOne({ citizenship_no });

    if (checkEmail || checkPhoneNo) {
      return res
        .status(200)
        .json({ status: false, message: "Email or Phone Number already used" });
    }

    if (checkCitizenshipNo) {
      return res
        .status(200)
        .json({ status: false, message: "Citizenship Number must be unique" });
    }

    body.pictureURL = picture_url;
    body.user_type = "voter";
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      body.password = hash;
      userData = await User.create(body);
    });

    // if (user_type == "voter") {
    //   userData = await User.create(body);
    // } else {
    //   body.user_type = "voter";
    //   userData = await User.create(body);
    // }

    if (userData) {
      res.status(200).json({
        status: true,
        message: "Register Successfull",
        data: userData,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Register Failed",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await User.findOne({ _id: id });

    if (userData) {
      res.status(200).json({
        status: true,
        message: "User Found",
        data: userData,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "No user found",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error,
    });
  }
};

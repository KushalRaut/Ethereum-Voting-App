import User from "../model/user.model.js";
import dotenv from "dotenv";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

dotenv.config();

const serviceID = process.env.serviceID;
const accountSID = process.env.accountSID;
const authToken = process.env.authToken;

const client = require("twilio")(accountSID, authToken);

export const userLogin = async (req, res) => {
  try {
    const body = req.body;
    let userData;
    const { email, password, user_type } = body;

    if (user_type == null) return res.send("User type not found");

    if (user_type === "voter") {
      userData = await User.findOne({ email });
    }

    if (userData === null)
      return res
        .status(200)
        .json({ status: false, message: "Email not found" });

    if (userData && userData.password === password) {
      client.verify
        .services(serviceID)
        .verifications.create({
          to: `+977${userData.phone_No}`,
          channel: "sms",
        })
        .then((data) => {
          return res.status(200).json({ data: data });
        });
    } else {
      return res.status(400).json({
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
  try {
    const { phoneNumber, code } = req.body;

    if (code) {
      client.verify
        .services(serviceID)
        .verificationChecks.create({
          to: `+977${phoneNumber}`,
          code: code,
        })
        .then((data) => {
          res.status(200).json({
            status: true,
            message: "Verification Successfull",
            data: data,
          });
        })
        .catch((error) => {
          res.status(400).json({
            status: false,
            message: "Invalid Code",
            error: error,
          });
        });
    } else {
      return res.send(400).json({
        status: false,
        message: "No code available to proceed",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error,
    });
  }
};

export const userRegister = async (req, res) => {
  try {
    const body = req.body;
    const file = req.file;
    console.log(file);

    const { email, phone_No, user_type, citizenship_no } = body;
    let userData;
    let picture_url = new Date().toUTCString() + file?.filename;

    console.log(picture_url);

    const checkEmail = await User.findOne({ email });
    const checkPhoneNo = await User.findOne({ phone_No });
    const checkCitizenshipNo = await User.findOne({ citizenship_no });

    if (checkEmail) {
      return res.status(200).json({ message: "Email already used" });
    }

    if (checkPhoneNo) {
      return res.status(200).json({ message: "Phone Number already used" });
    }

    if (checkCitizenshipNo) {
      return res
        .status(200)
        .json({ message: "Citizenship Number must be unique" });
    }

    body.pictureURL = picture_url;

    if (user_type == "voter") {
      userData = await User.create(body);
    } else {
      body.user_type = "voter";
      userData = await User.create(body);
    }

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

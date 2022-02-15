import Candidate from "../model/candidate.model.js";
import User from "../model/user.model.js";

import bcrypt from "bcrypt";

export const postManifesto = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const file = req.file;
    let partyImage = new Date().toUTCString() + file?.filename;
    data.user = id;
    data.partyImage = partyImage;
    if (data) {
      const response = await Candidate.create(data);
      res.status(200).json({
        status: true,
        message: "Succesfully created manifesto",
        data: response,
      });
    } else {
      res.status(401).json({
        message: "Failed to create manifesto!! Enter all the fields",
      });
    }
  } catch (error) {
    res.status(401).json({
      status: false,
      message: error.message,
    });
  }
};

export const getAllManifestos = async (req, res) => {
  try {
    const { id } = req.params;
    const manifestos = await Candidate.find({ user: id });
    if (manifestos) {
      res.status(200).json({
        status: true,
        data: manifestos,
      });
    } else {
      res.status(401).json({
        message: "Failed to retrieve manifestos",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error,
    });
  }
};

export const candidateRegister = async (req, res) => {
  try {
    const body = req.body;
    const file = req.file;
    const saltRounds = 10;

    const { email, phone_No, citizenship_no } = body;
    let userData;
    let picture_url = new Date().toUTCString() + file?.filename;

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
    body.user_type = "candidate";

    bcrypt.hash("password", saltRounds, async (err, hash) => {
      body.password = hash;
      console.log(body);
      userData = await User.create(body);
    });

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

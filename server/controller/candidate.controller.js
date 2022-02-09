// import Candidate from "../model/candidate.model.js";

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

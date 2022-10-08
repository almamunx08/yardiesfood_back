const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img");
  },
  filename: function (req, file, cb) {
    if (file.mimetype == ("image/png" || "image/jpg" || "image/jpeg")) {
      const fileName = path.parse(file.originalname);
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        fileName.name.toLowerCase().split(" ").join("-") +
          "-" +
          uniqueSuffix +
          fileName.ext
      );
    } else {
      cb(new Error("Bad file"));
    }
  },
});

const fileUploadController = (req, res) => {
  const upload = multer({ storage: storage }).single("img");
  upload(req, res, (error) => {
    if (error) {
      res.send("something wrong ");
    } else {
      res.send({ status: "Uploaded Successfully", url: req.file.filename });
    }
  });
};

module.exports = fileUploadController;

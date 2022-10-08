const fileUploadController = (req, res) => {
   
   res.send({status: 'Uploaded Successfully', url: req.file.filename})
}

module.exports = fileUploadController
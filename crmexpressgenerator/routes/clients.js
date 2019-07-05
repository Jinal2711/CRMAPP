var express = require('express');
var multer = require('multer');
var router = express.Router();
var connection = require('../connection');
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "public/images/");
  },
  filename: function (req, file, callback) {
    let extentionarr = file.originalname.split(".");
    let extention = extentionarr[extentionarr.length - 1];
    callback(null, "profile" + "-" + Date.now() + '.' + extention);
  }
});

var upload = multer({
  storage: storage
})

router.post("/upload", upload.single('imageUploader'), (req, res) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
})

router.get('/', (req, res) => {
  connection.query("Select * from clients", (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  })
})

router.post('/', (req, res) => {
  let active = req.body.active;
  let clientName = req.body.clientName;
  let clientSurname = req.body.clientSurname;
  let language = req.body.language;
  let addr1 = req.body.addr1;
  let addr2 = req.body.addr2;
  let city = req.body.city;
  let state = req.body.state;
  let zipCode = req.body.zipCode;
  let country = req.body.country;
  let phoneNumber = req.body.phoneNumber;
  let faxNumber = req.body.faxNumber;
  let mobileNumber = req.body.mobileNumber;
  let emailAddress = req.body.emailAddress;
  let webAddress = req.body.webAddress;
  let crmId = req.body.crmId;
  let gender = req.body.gender;
  let dob = req.body.dob;
  let vatId = req.body.vatId;
  let taxCode = req.body.taxCode;
  let file = req.body.file;
  connection.query("Insert into `clients`\
       (`active`,`clientName`,`clientSurname`,`language`,`addr1`,`addr2`,`city`,`state`,`zipCode`,`country`,`phoneNumber`,`faxNumber`,`mobileNumber`,`emailAddress`,`webAddress`,`crmId`,`gender`,`dob`,`vatId`,`taxCode`,`file`)\
       Values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [active, clientName, clientSurname, language, addr1, addr2, city, state, zipCode, country,
    phoneNumber, faxNumber, mobileNumber, emailAddress, webAddress, crmId, gender, dob, vatId, taxCode, file
  ], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: "Client Data sent successfully",
      status: "OK"
    })
  })
})

router.get("/delete/:id", (req, res) => {
  connection.query("Delete from clients Where id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: "Data deleted successfully",
      status: 'OK'
    })
  })
})

router.get("/:id", (req, res) => {
  connection.query("Select * from clients Where id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send(rows[0])
  })
})

router.post('/update/:id', (req, res) => {
  let active = req.body.active;
  let clientName = req.body.clientName;
  let clientSurname = req.body.clientSurname;
  let language = req.body.language;
  let addr1 = req.body.addr1;
  let addr2 = req.body.addr2;
  let city = req.body.city;
  let state = req.body.state;
  let zipCode = req.body.zipCode;
  let country = req.body.country;
  let phoneNumber = req.body.phoneNumber;
  let faxNumber = req.body.faxNumber;
  let mobileNumber = req.body.mobileNumber;
  let emailAddress = req.body.emailAddress;
  let webAddress = req.body.webAddress;
  let crmId = req.body.crmId;
  let gender = req.body.gender;
  let dob = req.body.dob;
  let vatId = req.body.vatId;
  let taxCode = req.body.taxCode;
  let file = req.body.file;
  connection.query(" Update clients set \
       active=?,clientName=?,clientSurname=?,language=?,addr1=?,addr2=?,city=?,state=?,zipCode=?,country=?,phoneNumber=?,faxNumber=?,mobileNumber=?,emailAddress=?,webAddress=?,crmId=?,gender=?,dob=?,vatId=?,taxCode=?,file=?\
       Where id=?", [active, clientName, clientSurname, language, addr1, addr2, city, state, zipCode, country,
    phoneNumber, faxNumber, mobileNumber, emailAddress, webAddress, crmId, gender, dob, vatId, taxCode, file, req.params.id
  ], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: "Client Data Updated successfully",
      status: "OK"
    })
  })
})


module.exports = router;
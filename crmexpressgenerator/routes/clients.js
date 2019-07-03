var express = require('express');
var router = express.Router();
var connection = require('../connection');

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
  connection.query("Insert into `clients`\
       (`active`,`clientName`,`clientSurname`,`language`,`addr1`,`addr2`,`city`,`state`,`zipCode`,`country`,`phoneNumber`,`faxNumber`,`mobileNumber`,`emailAddress`,`webAddress`,`crmId`,`gender`,`dob`,`vatId`,`taxCode`)\
       Values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [active, clientName, clientSurname, language, addr1, addr2, city, state, zipCode, country,
    phoneNumber, faxNumber, mobileNumber, emailAddress, webAddress, crmId, gender, dob, vatId, taxCode
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
  connection.query(" Update clients set \
       active=?,clientName=?,clientSurname=?,language=?,addr1=?,addr2=?,city=?,state=?,zipCode=?,country=?,phoneNumber=?,faxNumber=?,mobileNumber=?,emailAddress=?,webAddress=?,crmId=?,gender=?,dob=?,vatId=?,taxCode=?\
       Where id=?", [active, clientName, clientSurname, language, addr1, addr2, city, state, zipCode, country,
    phoneNumber, faxNumber, mobileNumber, emailAddress, webAddress, crmId, gender, dob, vatId, taxCode, req.params.id
  ], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: "Client Data Updated successfully",
      status: "OK"
    })
  })
})

module.exports = router;
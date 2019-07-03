var express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get('/', (req, res) => {
  connection.query("Select * from family", (err, rows, fields) => {
    if (err) {
      res.send({
        msg: "No content",
        success: 'false'
      })
    } else {
      res.send(rows);
    }
  })
});

router.post('/', (req, res) => {
  let familyName = req.body.familyName;
  connection.query("Insert into `family` (`familyName`) Values (?)", [familyName], (err, rows, fields) => {
    if (err) throw err;
    res.send({
      msg: 'Family Data sent successfully',
      status: 'OK'
    })
  })
})

router.get("/delete/:id", (req, res) => {
  connection.query("Delete from family Where id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: 'Family Data deleted successfully',
      status: 'OK'
    })
  })
})

router.get("/:id", (req, res) => {
  connection.query("Select * from family Where id=?", [req.params.id], (err, rows, fields) => {

    if (err) {
      res.send({
        Error: err,
        msg: 'No content found',
        success: false
      })
    } else {
      res.send(rows[0]);
    }
  })
})

router.post("/update/:id", (req, res) => {
  let familyName = req.body.familyName;
  connection.query("Update family set familyName=? where id=?", [familyName, req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: 'Family Data updated successfully',
      status: 'OK'
    })
  })

})


module.exports = router;
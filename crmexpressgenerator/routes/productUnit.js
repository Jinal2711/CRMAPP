var express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get("/", (req, res) => {
  connection.query("Select * from units", (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  })
})

router.post("/", (req, res) => {
  let unitName = req.body.unitName;
  let pluralUnitName = req.body.pluralUnitName;
  connection.query("Insert into `units` (`unitName`,`pluralUnitName`) Values (?,?)", [unitName, pluralUnitName], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: 'Unit Data sent successfully',
      status: 'OK'
    })
  })
})

router.get('/:id', (req, res) => {
  connection.query("Select * from units Where id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send(rows[0]);
  })
})

router.post('/update/:id', (req, res) => {
  let unitName = req.body.unitName;
  let pluralUnitName = req.body.pluralUnitName;
  connection.query("Update units set unitName=?,pluralUnitName=? Where id=?", [unitName, pluralUnitName, req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: 'Unit Data updated successfully',
      status: 'OK'
    })
  })
})

router.get("/delete/:id", (req, res) => {
  connection.query("Delete from units Where id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: 'Unit data deleted successfully',
      status: 'OK'
    })
  })
})


module.exports = router;
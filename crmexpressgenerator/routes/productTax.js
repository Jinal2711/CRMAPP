var express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get('/', (req, res) => {
  connection.query("Select * from tax", (err, rows, fields) => {
    if (err) throw err
    res.send(rows)
  })
})

router.post('/', (req, res) => {
  let taxRateName = req.body.taxRateName;
  let taxRatePerc = req.body.taxRatePerc;
  connection.query("Insert into `tax` (`taxRateName`,`taxRatePerc`) Values(?,?)", [taxRateName, taxRatePerc], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: 'Tax rate sent successfully',
      status: 'OK'
    })
  })
})
router.get('/:id', (req, res) => {
  connection.query("Select * from tax Where id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send(rows[0]);
  })
})
router.post('/update/:id', (req, res) => {
  let taxRateName = req.body.taxRateName;
  let taxRatePerc = req.body.taxRatePerc;
  connection.query("Update tax set taxRateName=?,taxRatePerc=? Where id=?", [taxRateName, taxRatePerc, req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: 'Tax rate updated successfully',
      status: 'OK'
    })
  })
})

router.get('/delete/:id', (req, res) => {
  connection.query("Delete from tax Where id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: 'Tax rate deleted successfully',
      status: 'OK'
    })
  })
})

module.exports = router;
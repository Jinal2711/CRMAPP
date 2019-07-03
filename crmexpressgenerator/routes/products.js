var express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get('/', (req, res) => {
  connection.query("Select p.id,p.family,f.familyName,p.sku,p.productName,p.productDesc,p.price,p.productUnit,\
  u.unitName,u.pluralUnitName,p.taxRate,t.taxRateName,t.taxRatePerc,\
  p.providerName,p.purchasePrice,p.tariff\
  from CRM.products as p\
  inner join family as f\
  on p.family = f.id\
  inner join units as u on p.productUnit = u.id inner join tax as t on p.taxRate = t.id", (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  })
})
router.post('/', (req, res) => {
  let family = req.body.family;
  let sku = req.body.sku;
  let productName = req.body.productName;
  let productDesc = req.body.productDesc;
  let price = req.body.price;
  let productUnit = req.body.productUnit;
  let taxRate = req.body.taxRate;
  let providerName = req.body.providerName;
  let purchasePrice = req.body.purchasePrice;
  let tariff = req.body.tariff;
  connection.query("\
  Insert into `products` (`family`,`sku`,`productName`,`productDesc`,`price`,`productUnit`,`taxRate`,`providerName`,`purchasePrice`,`tariff`)\
  Values(?,?,?,?,?,?,?,?,?,?)", [family, sku, productName, productDesc, price, productUnit, taxRate, providerName, purchasePrice, tariff], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: "Product data sent successfully",
      status: "OK"
    })
  })
})

router.get('/:id', (req, res) => {
  connection.query("Select *  from products Where id=?",
    [req.params.id], (err, rows, fields) => {
      res.send(rows[0]);
    })
})

router.post("/update/:id", (req, res) => {
  let family = req.body.family;
  let sku = req.body.sku;
  let productName = req.body.productName;
  let productDesc = req.body.productDesc;
  let price = req.body.price;
  let productUnit = req.body.productUnit;
  let taxRate = req.body.taxRate;
  let providerName = req.body.providerName;
  let purchasePrice = req.body.purchasePrice;
  let tariff = req.body.tariff;
  connection.query("Update products set family=?,sku=?,productName=?,productDesc=?,price=?,productUnit=?,taxRate=?\
      ,providerName=?,purchasePrice=?,tariff=? Where id=?", [family, sku, productName, productDesc, price, productUnit, taxRate, providerName, purchasePrice, tariff, req.params.id], (err, rows, fields) => {
    if (err) {
      res.send({
        Error: err,
        success: false,
        msg: 'No content'
      })
    } else {
      res.send({
        msg: 'Data updated successfully',
        status: "OK"
      })
    }
  })
})

router.get("/delete/:id", (req, res) => {
  connection.query("Delete from products where id=?",
    [req.params.id], (err, rows, fields) => {
      if (err) throw err
      res.send({
        msg: 'Deleted Successfully',
        status: 'OK'
      })
    })
})

module.exports = router;
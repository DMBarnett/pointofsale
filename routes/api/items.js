const express = require("express");
const router = express.Router();

const Product = require("../../models/items")

//Retrieve all items api/products
//Gets from db
router.get("/", (req, res) =>{
  Product.find({})
  .then(products => res.json(products))
})

//Create a new product to the db
//Post to the db
router.post("/", (req, res) =>{
  console.log(req.body);
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  })
  newProduct.save().then(product => res.json(product))
})


//Update an item
//router

//Delete a product
router.delete("/:id", (req, res) =>{
  Product
    .findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({sucess:true})))
    .catch(err => res.json(err))
})

module.exports = router;
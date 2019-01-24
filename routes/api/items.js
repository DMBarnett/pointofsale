const express = require("express");
const router = express.Router();

const db = require("../../models")

//Retrieve all items api/products
//Gets from db
router.get("/", (req, res) =>{
  db.Item.findAll({})
  .then(products => {
    console.log("items tester");
    res.json(products);
  })
});

router.get("/:abb", (req, res) =>{
  db.Item.findAll({
    where:{
      category:req.params.abb
    }
  })
  .then(products => {
    console.log("item category tester");
    res.json(products);
  })
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

//Final Sale procedures
//put and record sale
router.put("/", (req,res)=>{
  const working = req.body.pass;
  console.log(working);
  working.itemsOwned.forEach(element=>{
    db.Item.update({
      quantity:element.quantity
    },{where:{id:element.id}})
  })

  working.itemsSold.forEach(element=>{
    db.History.create({
      customerID:working.customer.id,
      item_id:element.id,
      quantity:element.quantity,
      price_each:element.price
    })       
  })
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